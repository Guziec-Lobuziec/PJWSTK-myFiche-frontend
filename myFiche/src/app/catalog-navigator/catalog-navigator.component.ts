import { Component, OnInit } from '@angular/core';
import { HomePageStateService } from '../shared/home-page-state.service';
import { ContentEnum } from '../shared/model/content-enum.enum';
import { Input } from '@angular/core';
import { Catalog } from '../shared/model/catalog';

@Component({
  selector: 'app-catalog-navigator',
  templateUrl: './catalog-navigator.component.html',
  styleUrls: ['./catalog-navigator.component.css'],
  providers: [HomePageStateService]
})
export class CatalogNavigatorComponent implements OnInit {

  @Input() file:Catalog;

  constructor(private homePageStateService:HomePageStateService) { }

  ngOnInit() {
  }

  toFicheEdit() {
    this.homePageStateService.swapContent(ContentEnum.FICHE_EDITOR);
  }

}
