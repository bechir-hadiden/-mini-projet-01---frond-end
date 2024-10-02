import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,AddDepartementComponent , HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LesDepartements';
}
