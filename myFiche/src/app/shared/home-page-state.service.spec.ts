/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomePageStateService } from './home-page-state.service';

describe('Service: HomePageStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomePageStateService]
    });
  });

  it('should ...', inject([HomePageStateService], (service: HomePageStateService) => {
    expect(service).toBeTruthy();
  }));
});