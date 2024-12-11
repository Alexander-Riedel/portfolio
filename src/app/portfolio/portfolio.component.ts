import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './portfolio.responsive.scss']
})

export class PortfolioComponent {

  hoverStates: boolean[] = [];
  visibilityStates: boolean[] = [];
  projects: any[] = [];
  private timeoutId: any;

  constructor(private translate: TranslateService) {
    this.hoverStates = [];

    this.translate.get('projects').subscribe((translations) => {
      this.projects = [
        {
          id: 1,
          name: translations['join']['name'],
          img: 'assets/img/portfolio/join.png',
          description: translations['join']['description'],
          skills: translations['join']['skills'],
          githubLink: '#',
          liveLink: '#',
        },
        {
          id: 2,
          name: translations['dabubble']['name'],
          img: 'assets/img/portfolio/dabubble.png',
          description: translations['dabubble']['description'],
          skills: translations['dabubble']['skills'],
          githubLink: '#',
          liveLink: '#',
        },
        {
          id: 3,
          name: translations['el-pollo-loco']['name'],
          img: 'assets/img/portfolio/elpolloloco.png',
          description: translations['el-pollo-loco']['description'],
          skills: translations['el-pollo-loco']['skills'],
          githubLink: '#',
          liveLink: '#',
        },
        {
          id: 4,
          name: translations['pokedex']['name'],
          img: 'assets/img/portfolio/pokedex.png',
          description: translations['pokedex']['description'],
          skills: translations['pokedex']['skills'],
          githubLink: '#',
          liveLink: '#',
        },
      ];
    });
  }

  showAlternateContent(index: number) {
    this.timeoutId = index;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.hoverStates[index] = true;
  }

  showOriginalContent(index: number) {
    this.timeoutId = setTimeout(() => {
      this.hoverStates[index] = false;
    }, 150);
  }

}
