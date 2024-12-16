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
  successMessage = '';
  errorMessage = '';
  showAlert = false;

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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
            this.translate.get('banner.success').subscribe((message) => {
              this.successMessage = message;
              this.errorMessage = '';
              this.displayAlert();
              ngForm.resetForm();
            });
          },
          error: (error) => {
            console.error('Error:', error);
            this.translate.get('banner.error').subscribe((message) => {
              this.successMessage = '';
              this.errorMessage = message;
              this.displayAlert();
            });
          },
        });
    }
  }

  displayAlert() {
    this.showAlert = true;
  
    setTimeout(() => {
      this.showAlert = false;
  
      setTimeout(() => {
        this.successMessage = '';
        this.errorMessage = '';
      }, 500);
    }, 5000);
  }

  validateForm(form: NgForm): void {
    if (!form.valid) {
      form.form.markAllAsTouched();
    } else {
      this.onSubmit(form);
    }
  }
}
