import { Component, OnInit } from '@angular/core';
import { College } from '../Model/college.model';
import { DepartementService } from '../services/departement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from '../Model/departement.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-departement',
  standalone: true,
  imports: [FormsModule , CommonModule],
  providers: [DepartementService],
  templateUrl: './update-departement.component.html',
  styleUrl: './update-departement.component.css'
})
export class UpdateDepartementComponent implements OnInit {
 

  colleges! : College[];
updatedColId! : number;
currentDepartement = new Departement();

constructor(private departementServices : DepartementService  , private activatedRoute: ActivatedRoute , private router : Router   ){}

ngOnInit(): void {
  
  this.departementServices.consulterDepartement(this.activatedRoute.snapshot.params['id']).
  subscribe( depar =>{ this.currentDepartement = depar; } ) ;

  this.departementServices.consulterDepartement(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentDepartement = prod;
    this.updatedColId =
    this.currentDepartement.college.idCol;});
    
}



updateDepartement() {

  this.departementServices.listeColleges().
  subscribe(col => {console.log(col);
  // this.colleges = col._embedded.colleges;
  }
  );

  this.departementServices.consulterDepartement(this.activatedRoute.snapshot.params['id']).
  subscribe( depar =>{ this.currentDepartement = depar;
  this.updatedColId = this.currentDepartement.college.idCol;
});



  


// ngOnInit() {
//   // console.log(this.route.snapshot.params.id);
//   this.currentDepartement = this.departementServices.consulterDepartement(this.activatedRoute.snapshot. params['id']);
//   console.log(this.currentDepartement);
//   } 

}
}