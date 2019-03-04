import { Component, OnInit } from '@angular/core';
import { HomePageStateService } from '../shared/home-page-state.service';
import { ContentEnum } from '../shared/model/content-enum.enum';
import { Input, Output } from '@angular/core';
import { Catalog } from '../shared/model/catalog';
import { isNullOrUndefined } from 'util';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-catalog-navigator',
  templateUrl: './catalog-navigator.component.html',
  styleUrls: ['./catalog-navigator.component.css'],
  providers: [HomePageStateService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogNavigatorComponent implements OnInit {

  @Input('file') set setupFileModel(file:Catalog) {
    this.catalog = file;
    this.catalogView = [];

    if(!isNullOrUndefined(this.catalog.files)){

      if(this.catalog.files.length === 0)
        this.catalogView.push({row: []});

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

    console.log(this.catalog);
    console.log(this.catalogView);

  }

  catalog:Catalog;
  rowSize:number = 4;
  catalogView:{row:{name:string,type:string}[]}[] = [];
  newCatalog:Catalog = new Catalog();
  newCatalogDialog:boolean = false;

  constructor(
    private homePageStateService:HomePageStateService,
    private ref:ChangeDetectorRef) { }

  ngOnInit() {
  }

  createNewFiche() {
    this.homePageStateService.swapContent(ContentEnum.NEW_FICHE,null);
  }

  addNewCatalog() {
    this.newCatalogDialog = true;
    this.homePageStateService.swapContent(ContentEnum.NEW_CATALOG,this.newCatalog);
    this.newCatalog = new Catalog();
  }

  cancelAddNewCatalog() {
    this.newCatalogDialog = false;
    this.newCatalog = new Catalog();
  }

}
