import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNavigatorComponent } from './catalog-navigator.component';

describe('CatalogNavigatorComponent', () => {
  let component: CatalogNavigatorComponent;
  let fixture: ComponentFixture<CatalogNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
