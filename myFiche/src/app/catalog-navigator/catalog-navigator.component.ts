import { Component, OnInit } from '@angular/core';
import { HomePageStateService } from '../shared/home-page-state.service';
import { ContentEnum } from '../shared/model/content-enum.enum';
import { Input } from '@angular/core';
import { Catalog } from '../shared/model/catalog';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-catalog-navigator',
  templateUrl: './catalog-navigator.component.html',
  styleUrls: ['./catalog-navigator.component.css'],
  providers: [HomePageStateService]
})
export class CatalogNavigatorComponent implements OnInit {

  @Input('file') set setupFileModel(file:Catalog) {

    this.catalog = file;
    if(!isNullOrUndefined(this.catalog.files)){
      this.catalog.files.forEach((data,index) => {

        if(index%this.rowSize === 0){
          this.catalogView.push({row: []});
        }

        this.catalogView[Math.floor(index/this.rowSize)]
          .row.push({name: data.name,type: data.type});
      })

      for(var i = 0;
          i<this.rowSize - this.catalogView[this.catalogView.length-1].row.length;
           ++i) {
            this.catalogView[this.catalogView.length-1].row.push({name:'',type:''});
          }
    }

  }

  catalog:Catalog;
  rowSize:number = 4;
  catalogView:{row:{name:string,type:string}[]}[] = [];

  constructor(private homePageStateService:HomePageStateService) { }

  ngOnInit() {
  }

  toFicheEdit() {
    this.homePageStateService.swapContent(ContentEnum.FICHE_EDITOR);
  }

}
