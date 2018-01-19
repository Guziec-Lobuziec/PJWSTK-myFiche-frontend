import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../shared/file.service';
import { HomePageStateService } from '../shared/home-page-state.service';
import { ContentEnum } from '../shared/model/content-enum.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [FileService,HomePageStateService]
})
export class HomePageComponent implements OnInit {

  model = {
    user: '',
    path: ''
  }

  state:string = ContentEnum.FICHE_EDITOR.toString();

  constructor(
    private route: ActivatedRoute, 
    private fileService:FileService,
    private homePageStateService:HomePageStateService) { }

  loadFile() {}

  toCatalogViev() {
    this.homePageStateService.swapContent(ContentEnum.CATALOG_VIEW);
  }

  ngOnInit() {

    this.route.params.subscribe(param => {
      this.model.user = param.username
    })

    this.route.url.subscribe(url => {
      this.model.path = url.join('/')
    })

    this.homePageStateService.listenToContentChange().subscribe( state => {

      this.state = state.toString();

    } );

  }

}
