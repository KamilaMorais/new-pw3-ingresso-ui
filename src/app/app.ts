import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';
import { HomeComponent } from './pages/home/home';
import { DetalhesComponent } from "./pages/filme/detalhes";

@Component({
  selector: 'app-root',
 imports: [HeaderComponent, FooterComponent, HomeComponent, DetalhesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'pw3-ingresso-ui';
}
