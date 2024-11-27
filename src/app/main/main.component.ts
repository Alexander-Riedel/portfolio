import { Component } from '@angular/core';
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
