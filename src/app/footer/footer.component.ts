import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.responsive.scss']
})
export class FooterComponent {
  currentLang: string;

  constructor(private translate: TranslateService, private router: Router) {
    this.currentLang = translate.currentLang || 'de';
  }

  changeLang(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;

    const currentUrl = this.router.url;
    const newUrl = currentUrl.includes('impressum') ? '/legal-notice' : '/impressum';
    this.router.navigate([newUrl]);
  }
}
