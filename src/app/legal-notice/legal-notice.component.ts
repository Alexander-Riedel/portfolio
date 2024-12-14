import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})

export class LegalNoticeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    const lang = this.route.snapshot.data['lang'] || 'en';
    this.translate.use(lang);
  }
}