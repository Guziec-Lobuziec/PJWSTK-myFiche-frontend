import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../shared/file.service';
import { HomePageStateService } from '../shared/home-page-state.service';
import { ContentEnum } from '../shared/model/content-enum.enum';
import { ProgramFile } from '../shared/model/program-file';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [FileService,HomePageStateService]
})
export class HomePageComponent implements OnInit {

    user:string = '';
    path:string = '';
    state:string = ContentEnum.FICHE_EDITOR.toString();
    fileInBackground:ProgramFile = new ProgramFile();
    file:ProgramFile = new ProgramFile();

  constructor(
    private route: ActivatedRoute, 
    private fileService:FileService,
    private homePageStateService:HomePageStateService) { }

  ngOnInit() {

    this.route.params.subscribe(param => {
      this.user = param.username
    })

    this.route.url.subscribe(url => {
      this.path = url.join('/')
    })

    this.fileService.getFile(this.user,this.path).subscribe(f => {
      this.file = f;

      if(f.type === "Catalog")
        this.state = ContentEnum.CATALOG_VIEW.toString();
      else if(f.type === "Fiche")
        this.state = ContentEnum.FICHE_EDITOR.toString();
    })

    this.homePageStateService.listenToContentChange().subscribe( state => {

      this.state = state.toString();

      var tmp:ProgramFile = this.file;
      this.file = this.fileInBackground;
      this.fileInBackground = tmp; 

    } );

  }

}
