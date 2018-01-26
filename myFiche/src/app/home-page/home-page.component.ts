import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../shared/file.service';
import { HomePageStateService } from '../shared/home-page-state.service';
import { ContentEnum } from '../shared/model/content-enum.enum';
import { ProgramFile } from '../shared/model/program-file';
import { Observable } from 'rxjs/Observable';
import { Fiche } from '../shared/model/fiche';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [FileService,HomePageStateService]
})
export class HomePageComponent implements OnInit {

    user:string = '';
    path:string = '';
    state:string = ContentEnum.VIEW_CATALOG.toString();
    fileInBackground:ProgramFile = new ProgramFile();
    file:ProgramFile = new ProgramFile();
    controlCases:((content:{current:ContentEnum,last:ContentEnum, file:ProgramFile}) => boolean)[] = [];

  constructor(
    private route: ActivatedRoute, 
    private fileService:FileService,
    private homePageStateService:HomePageStateService) { }

  ngOnInit() {

    // this.route.params.subscribe(param => {
    //   this.user = param.username;
    //   console.log(this.user)
    // })

    // this.route.url.subscribe(url => {
    //   this.path = url.join('/');
    //   console.log(this.path)
    // })

    this.controlCases.push(content => {
      if(content.current === ContentEnum.VIEW_CATALOG){
        if(content.last === ContentEnum.NEW_FICHE){
          this.file = this.fileInBackground;
        }
        this.state = "0"
        return true;
      }
      return false;
    });

    this.controlCases.push(content => {
      if(content.current === ContentEnum.NEW_FICHE){
        this.state = "1"
        this.fileInBackground = this.file;
        this.file = new Fiche();
        return true;
      }
      return false;
    });

    this.controlCases.push(content => {
      if(content.current === ContentEnum.EDIT_FICHE){
        this.state = "1"
        return true;
      }
      return false;
    });

    this.controlCases.push(content => {
      if(content.current === ContentEnum.SAVE_FICHE){
        this.state = "0"
        return true;
      }
      return false;
    });

    this.controlCases.push(content => {
      if(content.current === ContentEnum.NEW_CATALOG){
        this.state = "0";
        this.fileService.addFile(this.user,this.path,this.file);
        return true;
      }
      return false;
    });

    this.route.params.mergeMap(param => this.route.url.map(url => ({param,url})))
      .subscribe( pathProperties => {

        this.user =  pathProperties.param.username;
        this.path = pathProperties.url.join('/');

        this.fileService.getFile(this.user,this.path).subscribe(f => {
          this.file = f;
    
          if(f.type === "Catalog")
            this.homePageStateService.swapContent(ContentEnum.VIEW_CATALOG,this.file);
          else if(f.type === "Fiche")
            this.homePageStateService.swapContent(ContentEnum.EDIT_FICHE,this.file);
        })
        
      })

    this.homePageStateService.listenToContentChange().subscribe( state => {

      this.controlCases.forEach(f=>f(state));

    } );

  }

}
