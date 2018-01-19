import { Injectable } from '@angular/core';
import { ContentEnum } from './model/content-enum.enum';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx'

@Injectable()
export class HomePageStateService {

private static contentSubject:BehaviorSubject<ContentEnum> = 
    new BehaviorSubject<ContentEnum>(ContentEnum.FICHE_EDITOR);

constructor() { }

public swapContent(contentName:ContentEnum): void{

    HomePageStateService.contentSubject.next(contentName);

}

public listenToContentChange(): BehaviorSubject<ContentEnum> {

    return HomePageStateService.contentSubject;

}

}