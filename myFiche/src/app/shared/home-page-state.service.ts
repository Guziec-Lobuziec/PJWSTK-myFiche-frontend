import { Injectable } from '@angular/core';
import { ContentEnum } from './model/content-enum.enum';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx'
import { ProgramFile } from './model/program-file';

@Injectable()
export class HomePageStateService {

private static contentSubject:BehaviorSubject<ContentEnum> = 
    new BehaviorSubject<ContentEnum>(ContentEnum.VIEW_CATALOG);

private static lastContentSubject:BehaviorSubject<ContentEnum> = 
    new BehaviorSubject<ContentEnum>(ContentEnum.VIEW_CATALOG);

private static fileSubject:BehaviorSubject<ProgramFile> = 
    new BehaviorSubject<ProgramFile>(new ProgramFile());

constructor() { }

public swapContent(contentName:ContentEnum, contentFile:ProgramFile): ContentEnum{

    var last = HomePageStateService.contentSubject.getValue();
    HomePageStateService.lastContentSubject.next(last);

    HomePageStateService.fileSubject.next(contentFile);
    HomePageStateService.contentSubject.next(contentName);

    return last;
}

public listenToContentChange(): 
    Observable<{current: ContentEnum, 
                last: ContentEnum, 
                file:ProgramFile}> {

    return Observable.zip(
        HomePageStateService.contentSubject,
        HomePageStateService.lastContentSubject,
        HomePageStateService.fileSubject,
        (current: ContentEnum,last: ContentEnum, file: ProgramFile) => ({current,last,file}));

}

}