
import { Injectable } from '@angular/core';
//import {MockObject} from './app.mockdata';
import {Http,Response,Headers} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()



export class ServiceClass{
   url :string ;
data:any={'success':'',error:''};
    constructor( private http:Http){
        }
     postdata(){
            var headers = new Headers;
    headers.append('Content-Type','application/json; charset=utf-8');
      return  this.http.post(this.url,this.data,{headers:headers}).map((res) => res);      
    }
    getData(){
        console.log("hai");
        return this.http.get('http://localhost:3000/posts').map((res) => res)
        
    }
}