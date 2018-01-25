import { Injectable } from '@angular/core';
import { ContentEnum } from './model/content-enum.enum';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx'

@Injectable()
export class HomePageStateService {

private static contentSubject:BehaviorSubject<ContentEnum> = 
    new BehaviorSubject<ContentEnum>(ContentEnum.VIEW_CATALOG);

private static lastContentSubject:BehaviorSubject<ContentEnum> = 
    new BehaviorSubject<ContentEnum>(ContentEnum.VIEW_CATALOG);

constructor() { }

public swapContent(contentName:ContentEnum): ContentEnum{

    var last = HomePageStateService.contentSubject.getValue();
    HomePageStateService.lastContentSubject.next(last);

    HomePageStateService.contentSubject.next(contentName);

    return last;
}

public listenToContentChange(): Observable<{current: ContentEnum, last: ContentEnum}> {

    return Observable.zip(
        HomePageStateService.contentSubject,
        HomePageStateService.lastContentSubject,
        (current: ContentEnum,last: ContentEnum) => ({current,last}));

}

}