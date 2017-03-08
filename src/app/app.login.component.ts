import {Component,OnInit} from "@angular/core";
import {ModelData} from "./app.model";
import {ServiceClass } from "../service/app.services";
import{Router} from "@angular/router"
@Component({
    selector:"login",
    templateUrl:"app.login.component.html",
    
})
export class Login implements OnInit{
    isTrue:boolean=false;
    data;
    dataobj;
model:ModelData
 constructor (private getService:ServiceClass, private router:Router){
this.model={
    email:"",
    password:""
}
 }
//  getMethod(){
//      this.getService.getData().subscribe(result => this.data=result["_body"]);
    
//  }
 login(model){
     this.getService.data=this.model;
this.getService.url="http://localhost:3003/dashboard";
     this.getService.postdata().subscribe(res =>{
         this.data = res["_body"];
         this.dataobj =JSON.parse(this.data);
         console.log(JSON.parse(this.data));
         if(this.dataobj.data=="success"){
             this.router.navigate(["dashboard"]);
            console.log("successfully login"); 
         }
         else{
            this.isTrue = true;  
         }
console.log(res);
     })
//      var email = this.model.email;
//      var password = this.model.password;
// console.log(JSON.parse( this.data));
// var arr =JSON.parse( this.data);
// this.dataobj=arr.filter(function(obj){
 
//  return obj.email==email&&obj.password==password
//  })
// if(this.dataobj[0]==undefined){
//     this.inTrue = true;
//     console.log("user invalid credentials");
// }
// else{
//     this.router.navigate(["dashboard"])
//     console.log("successfully login");
// }
// this.user ={
//        firstName:"",
//     lastName:"",
//     email:"",
//     password:""
// };
}
 ngOnInit(){
//this.getMethod();
 }
}