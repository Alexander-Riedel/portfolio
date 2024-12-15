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
          githubLink: 'https://github.com/Alexander-Riedel/join',
          liveLink: 'https://proj.alexanderriedel.de/join',
        },
        {
          id: 2,
          name: translations['el-pollo-loco']['name'],
          img: 'assets/img/portfolio/elpolloloco.png',
          description: translations['el-pollo-loco']['description'],
          skills: translations['el-pollo-loco']['skills'],
          githubLink: 'https://github.com/Alexander-Riedel/el-pollo-loco',
          liveLink: 'https://proj.alexanderriedel.de/el-pollo-loco',
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
