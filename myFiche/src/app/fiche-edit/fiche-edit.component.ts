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
    this.ficheDataView = [];
    if(!isNullOrUndefined(this.fiche.ficheData)){

      if(this.fiche.ficheData.length === 0)
        this.ficheDataView.push({row: []});

      this.fiche.ficheData.forEach((data,index) => {

        if(index%this.rowSize === 0){
          this.ficheDataView.push({row: []});
        }

        this.ficheDataView[Math.floor(index/this.rowSize)]
          .row.push({front: data.frontText,back: data.backText});
      })

      for(var i = 0;
          i<this.rowSize - this.ficheDataView[this.ficheDataView.length-1].row.length;
           ++i) {
            this.ficheDataView[this.ficheDataView.length-1].row.push({front:'',back:''});
          }
    }

  }

  fiche:Fiche;
  rowSize:number = 4;
  ficheDataView:{row:{front:string,back:string}[]}[] = [];

  constructor(private homePageStateService:HomePageStateService) { }

  exitWithOutSaving() {
    this.homePageStateService.swapContent(ContentEnum.VIEW_CATALOG, null);
  }

  ngOnInit() {
  }

}
