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

public getFile(username:string,url:string):Observable<ProgramFile> {

    return this.http.get(environment.server_url+'/'+username+'/'+url)
                    .map(resp => resp.json());

}

public addFile(username:string,url:string, file:ProgramFile):Observable<Response> {
    
    return this.http.post(environment.server_url+'/'+username+'/'+url,file);

}

}