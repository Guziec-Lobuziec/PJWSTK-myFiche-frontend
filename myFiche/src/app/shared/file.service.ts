import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProgramFile } from './model/program-file';

@Injectable()
export class FileService {

constructor(private http:Http) {}

public getFile(url:string,username:string):Observable<ProgramFile> {

    this.http.get()

}

}