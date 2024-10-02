import { Component } from '@angular/core';
import { Departement } from '../Model/departement.model';
import { College } from '../Model/college.model';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-recherche-par-college',
  standalone: true,
  imports: [NgFor , RouterModule , CommonModule , FormsModule  ],
  templateUrl: './recherche-par-college.component.html',
  styleUrl: './recherche-par-college.component.css'
})
export class RechercheParCollegeComponent {


  constructor(private departementServices: DepartementService , router : Router) {}

  departement! : Departement[];
  idCollege! : number;
  colleges! : College[];


  ngOnInit(): void {
    this.departementServices.listeColleges().
    subscribe(col => {this.colleges = col._embedded.colleges;
    console.log(col);
    });
    }
  

}
