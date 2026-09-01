import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  logout(): void {

  }

}
