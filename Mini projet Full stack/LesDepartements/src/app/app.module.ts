import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DepartementsComponent } from './departements/departements.component';
import { CommonModule } from '@angular/common';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [

  ],
  imports: [
      BrowserModule,
       CommonModule,
       FormsModule ,
       RouterModule,
       HttpClientModule ],
  providers: [],
  bootstrap: [],
  exports: [
  ]
})
export class AppModule {}
