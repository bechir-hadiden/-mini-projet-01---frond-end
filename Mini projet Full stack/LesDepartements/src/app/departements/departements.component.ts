import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Departement } from '../Model/departement.model';
import { DepartementService } from '../services/departement.service';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({

  selector: 'app-departements',
  standalone: true,
  imports: [NgFor ,RouterModule , CommonModule , HttpClientModule ],
  providers: [DepartementService],

  templateUrl: './departements.component.html',
  styleUrl: './departements.component.css',

})

export class DepartementsComponent implements OnInit {

  departements: Departement[];

  constructor(private departementServices: DepartementService , router : Router) {
    this.departements = departementServices.listDepartement();

  }
  ngOnInit(): void {
    //   this.departementServices.listeDepartement().subscribe(depar => {
    //     console.log(depar);
    //     this.departements = depar;
        
  
    // });
  
    this.chargeDepartement();
  
  }

  chargeDepartement() {
    this.departementServices.listDepartemente().subscribe(depar => {
      console.log(depar);
      this.departements = depar;
    });
  }

  supprimerDepartement(d: Departement) {
    let conf = confirm("Etes-vous sûr ?");
     if (conf) {
      this.departementServices.supprimerDepartemente(d.idDepartement).subscribe(() => {
        console.log("produit supprimé");
        this.chargeDepartement();
        });
        }






}
}
