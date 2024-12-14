import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'impressum', component: LegalNoticeComponent, data: { lang: 'de' } },
    { path: 'legal-notice', component: LegalNoticeComponent, data: { lang: 'en' } },
    { path: 'datenschutzerklaerung', component: PrivacyPolicyComponent, data: { lang: 'de' } },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { lang: 'en' } }
];
