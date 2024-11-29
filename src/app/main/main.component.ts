import { Component } from '@angular/core';
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { SkillsComponent } from "../skills/skills.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { ContactformComponent } from "../contact/contact.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ReviewsComponent, ContactformComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
