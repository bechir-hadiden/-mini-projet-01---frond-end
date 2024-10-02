import { Injectable } from '@angular/core';
import { Departement } from '../Model/departement.model';
import { College } from '../Model/college.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollegWrapped } from '../Model/CollegeWrapped';

@Injectable({
  providedIn: 'root'
})



export class DepartementService {


   httpOptions = {
    headers: new HttpHeaders( {'Content-Type': 'application/json'} )
    };


  departements: Departement[];
  colleges!: College[];
  departement!: Departement;

    
    apiURL: string = 'http://localhost:8082/departements/api';
    
    apiURLCol : string = 'http://localhost:8080/departements/col';
    

  constructor(private http : HttpClient) {
    this.departements = [{
      idDepartement: 1, nomDepartement: "departement genie civil ", nombreEmployee: 34, dateAffectation: new Date("01/14/2011"), college: { idCol: 1, nomCol: " college taher haded" }
    },
    {
      idDepartement: 2, nomDepartement: "Departement electrique ", nombreEmployee: 36, dateAffectation: new Date("31/1/2014"), college: { idCol: 2, nomCol: " college dar chaben" }

    },
    {
      idDepartement: 3, nomDepartement: "Departement informatique", nombreEmployee: 66, dateAffectation: new Date("19/04/2015"), college: { idCol: 3, nomCol: " college hammemt" }

    }
    ];
  }
  listeDepartement(): Observable<Departement[]>{
    return this.http.get<Departement[]>(this.apiURL);
    }




    ajouterDepartement( depar: Departement):Observable<Departement>{
      return this.http.post<Departement>(this.apiURL, depar, this.httpOptions);
      }
      

      listDepartemente(): Observable<Departement[]> {
        // Retourne un Observable avec les départements via une requête HTTP
        return this.http.get<Departement[]>(this.apiURL);
      }

  listDepartement(): Departement[] {
    return this.departements;
  }

  // ajouterDepartement(depar: Departement) {
  //   this.departements.push(depar);
  // }

  consulterDepartement(id: number): Observable<Departement> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Departement>(url);
  }
  

  // listeCollege(): College[] {
  //   return this.colleges;
  // }

  consulterCollege(id: number): Observable<CollegWrapped> {
    return this.http.get<CollegWrapped>(this.apiURLCol);
  }

  supprimerDepartement(d: Departement) {
    const index = this.departements.indexOf(d, 0);
    if (index > -1) {
      this.departements.splice(index, 1);
    }

  }


  supprimerDepartemente(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, this.httpOptions);
    }

    

  updateDepartement(depar: Departement)  : Observable<Departement>
  {
    return this.http.put<Departement>(this.apiURL, depar, this.httpOptions);


  }

  listeColleges():Observable<CollegWrapped[]>{
    return this.http.get<CollegWrapped[]>(this.apiURL);
    }



    rechercheParCollege(idCol: number):Observable< Departement[]> {
      const url = `${this.apiURL}/prodscat/${idCol}`;
      return this.http.get<Departement[]>(url);
      }
      


  trierDepartements() {
    this.departements = this.departements.sort((n1, n2) => {
      if (n1.idDepartement! > n2.idDepartement!) {
        return 1;
      }
      if (n1.idDepartement! < n2.idDepartement!) {
        return -1;
      }
      return 0;
    });
  }



}
