import { Routes } from '@angular/router';
import { DepartementsComponent } from './departements/departements.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { RechercheParCollegeComponent } from './recherche-par-college/recherche-par-college.component';






export const routes: Routes = [ 
     {path : 'departements', component : DepartementsComponent},
     {path : 'add-departement', component : AddDepartementComponent},
     {path : 'updateDepartement/:id', component : UpdateDepartementComponent},
     {path : 'rechercheParCollege', component : RechercheParCollegeComponent},


];

