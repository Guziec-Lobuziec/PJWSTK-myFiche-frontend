import { Component, OnInit } from '@angular/core';
import { HomePageStateService } from '../shared/home-page-state.service';
import { ContentEnum } from '../shared/model/content-enum.enum';
import { Input } from '@angular/core';
import { Fiche } from '../shared/model/fiche';
import { FicheData } from '../shared/model/fiche-data';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-fiche-edit',
  templateUrl: './fiche-edit.component.html',
  styleUrls: ['./fiche-edit.component.css'],
  providers: [HomePageStateService]
})
export class FicheEditComponent implements OnInit {

  @Input('file') set setupFileModel(file:Fiche){

    this.fiche = file;
    if(!isNullOrUndefined(this.fiche.ficheData)){
      this.fiche.ficheData.forEach((data,index) => {

        if(index%this.rowSize === 0){
          this.ficheDataViev.push({row: []});
        }

        this.ficheDataViev[Math.floor(index/this.rowSize)]
          .row.push({front: data.frontText,back: data.backText});
      })

      for(var i = 0;
          i<this.rowSize - this.ficheDataViev[this.ficheDataViev.length-1].row.length;
           ++i) {
            this.ficheDataViev[this.ficheDataViev.length-1].row.push({front:'',back:''});
          }
    }

    console.log(this.ficheDataViev);

  }

  fiche:Fiche;
  rowSize:number = 4;
  ficheDataViev:{row:{front:string,back:string}[]}[] = [];

  constructor(private homePageStateService:HomePageStateService) { }

  toCatalogViev() {
    this.homePageStateService.swapContent(ContentEnum.CATALOG_VIEW);
  }

  ngOnInit() {
  }

}
