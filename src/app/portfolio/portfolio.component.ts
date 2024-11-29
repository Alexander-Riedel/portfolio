import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  hoverStates: boolean[] = [];
  visibilityStates: boolean[] = [];
  private timeoutId: any;

  projects = [
    {
      id: 1,
      name: 'Join',
      img: 'assets/img/portfolio/join.png',
      description: 'Description',
      skills: 'What | U | Use',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      name: 'DABubble',
      img: 'assets/img/portfolio/dabubble.png',
      description: 'Description',
      skills: 'What | U | Use',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      name: 'El Pollo Loco',
      img: 'assets/img/portfolio/elpolloloco.png',
      description: 'Description',
      skills: 'What | U | Use',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 4,
      name: 'Pokedex',
      img: 'assets/img/portfolio/pokedex.png',
      description: 'Description',
      skills: 'What | U | Use',
      githubLink: '#',
      liveLink: '#'
    },
  ];

  constructor() {
    this.hoverStates = Array(this.projects.length).fill(false);
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
