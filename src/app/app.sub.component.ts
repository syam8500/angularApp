import { Component, Input,OnInit,Output,EventEmitter }  from '@angular/core';
import{Router} from "@angular/router"
import { RegisterData } from "./app.sub.formdata";
import {ServiceClass } from "../service/app.services";
@Component({
    selector:'sub',
 templateUrl:'./app.sub.component.html',

})
export class SubComponent{
      isTrue:boolean=false;
@Input() title:string ;
user:RegisterData;
response;
data:any;
 dataobj;
constructor(private serviceclass:ServiceClass,private router:Router){
this.user ={
       firstName:"",
    lastName:"",
    email:"",
    password:""
};


}
onSubmit(user){
this.serviceclass.data=this.user;
this.serviceclass.url="http://localhost:3003/login";
     var email = this.user.email;
    // var password = this.model.password;
// console.log(JSON.parse( this.data));
// var arr =JSON.parse( this.data);
// this.dataobj=arr.filter(function(obj){
 
//  return obj.email==email
//  })
// if(this.dataobj[0]!=undefined){
//     this.inTrue=true;
//     console.log("already exist with this  credentials");
// }
// else{
    this.serviceclass.postdata().subscribe(response => {this.response = response["_body"];
    console.log(response);
if(this.response.data=="login"){
    this.router.navigate(["login"]);
    console.log("successfully register");}
    else{
       this.isTrue=true; 
    }
},error => console.log(error));
    
// }

// this.user ={
//        firstName:"",
//     lastName:"",
//     email:"",
//     password:""
// };
}
// child :string;
// data:string="i'm gud";
// @Output() notify:EventEmitter<string> = new  EventEmitter<string>();
ngOnInit(){
// this.serviceclass.getData().subscribe(result => this.data=result["_body"]);
}
// getdata() : void {
//     this.child="hai";
// }
// onClick(){
//  this.notify.emit(this.data);
// }
}
// export interface RegisterData{
//     firstName:string;
//     lastName:string;
//     email:string;
//     password:string;
// }
