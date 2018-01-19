import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProgramFile } from './model/program-file';
import { Catalog } from './model/catalog';

@Injectable()
export class FileService {

constructor(private http:Http) {}

public getFile(url:string,username:string):Observable<ProgramFile> {

    return Observable.create((observer) => {

        var p:Catalog = new Catalog()
        p.id = 1;
        p.name = "root";
        p.type = "Catalog";
        p.version = 1;
        p.files = [];
        observer.next(p);
    });

}

}