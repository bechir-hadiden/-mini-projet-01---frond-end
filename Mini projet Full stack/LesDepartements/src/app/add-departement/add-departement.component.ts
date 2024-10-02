import { Component, OnInit } from '@angular/core';
import { Departement } from '../Model/departement.model';
import { FormsModule } from '@angular/forms';
import { DepartementService } from '../services/departement.service';
import { College } from '../Model/college.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-departement',
  standalone: true,
  imports: [FormsModule],
  providers: [DepartementService],
  templateUrl: './add-departement.component.html',
  styleUrl: './add-departement.component.css'
})
export class AddDepartementComponent implements OnInit {

  newDepartement = new Departement();

  colleges!: College[];
  newIdCol!: number;
  newCollege!: College;

  constructor(private departementServices: DepartementService, private router: Router , private activatedRoute: ActivatedRoute ) { }


  ngOnInit(): void {

    this.departementServices.listeColleges().
    subscribe(col => {console.log(col);
    // this.colleges = this.colleges._embedded.colleges;
    }
    );

  
    



    // this.newDepartement.college = this.colleges.find(col => col.idCol == this.newIdCol)!;
    // this.departementServices.ajouterDepartement(this.newDepartement)
    //   .subscribe(prod => {
    //     console.log(prod);
    //     this.router.navigate(['produits']);
    //   });

  };
  // addDepartement() {
  //   console.log(this.newDepartement);
  // }


  addDepartement() {
    this.departementServices.ajouterDepartement(this.newDepartement)
      .subscribe(depar => {
        console.log(depar);
        this.router.navigate(['departement']);
      });

  }
}
