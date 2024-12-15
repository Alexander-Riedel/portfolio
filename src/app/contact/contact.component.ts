import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.responsive.scss']
})
export class ContactformComponent {

  currentLang: string;

  constructor(private translate: TranslateService, private router: Router) {
    this.currentLang = translate.currentLang || 'de';
  }

  changeLang(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;

    const currentUrl = this.router.url;
    const newUrl = currentUrl.includes('datenschutzerklaerung') ? '/privacy-policy' : '/datenschutzerklaerung';
    this.router.navigate([newUrl]);
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    policyAccepted: "",
  };

  mailTest = false;

  post = {
    endPoint: '/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  successMessage = '';
  errorMessage = '';

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
            this.successMessage = 'Email successfully sent!';
            this.errorMessage = '';
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Error:', error);
            this.successMessage = '';
            this.errorMessage = 'Error sending email. Please try again.';
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  validateForm(form: NgForm): void {
    if (!form.valid) {
      form.form.markAllAsTouched();
    } else {
      this.onSubmit(form);
    }
  }

}
