import { Component } from '@angular/core';
import { SubComponent} from './app.sub.component';
import {ServiceClass } from "../service/app.services";
@Component({
moduleId:module.id,
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'REGISTER';
//data1:MyClass;
//  constructor(){
// //this.data1 = [{id:23,name:""}];
// this.data1[0].id =24;
//   }
 
//console.log(data1);
  childTitle:string= "angular";
  Data:any[] ;
  onNotify(data:any[]){
    this.Data = data;
  }
}

// export  interface MyClass{
//   id:number;
//   name:string;
// }
