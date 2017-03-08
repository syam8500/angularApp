import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormGroup,FormBuilder,FormControl,Validators,FormControlDirective,NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes } from "@angular/router"
//requiremodules
import { AppComponent } from './app.component';
import { SubComponent} from './app.sub.component';
import {Login } from './app.login.component';
import {DashBoard} from './app.dashboard.component';
import {ServiceClass } from "../service/app.services";
import {CustomPipe} from "../pipes/app.custom.pipe";
 const routes : Routes=[ 
  { path: '', component: SubComponent},
  { path: 'login', component:Login},
  { path:'dashboard',component:DashBoard}

];
@NgModule({
  declarations: [
    AppComponent,
    SubComponent,Login,DashBoard,CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,RouterModule.forRoot(routes)
  ],
  providers: [ServiceClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
