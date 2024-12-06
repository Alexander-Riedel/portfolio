import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.responsive.scss']
})

export class HeaderComponent {

  activeSection: string = '';
  menuOpen: boolean = false;

  setActiveSection(section: string): void {
    this.activeSection = section;
    this.menuOpen = false;
    document.body.classList.remove('menu-open');
  }

  private scrollTimeout: any;

  @HostListener('window:scroll', [])
  onScroll(): void {
    clearTimeout(this.scrollTimeout);

    this.scrollTimeout = setTimeout(() => {
      const sections = document.querySelectorAll('section');
      let activeFound = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 300 && rect.bottom >= 300) {
          this.activeSection = section.id;
          activeFound = true;
        }
      });

      if (!activeFound) {
        this.activeSection = '';
      }
    }, 100);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

}
