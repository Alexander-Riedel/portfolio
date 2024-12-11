import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss', './reviews.responsive.scss']
})

export class ReviewsComponent {
  reviews = [
    {
      image: 'assets/img/reviews/001.jpg',
      textKey: 'review1.text',
      authorKey: 'review1.author'
    },
    {
      image: 'assets/img/reviews/002.jpg',
      textKey: 'review2.text',
      authorKey: 'review2.author'
    },
    {
      image: 'assets/img/reviews/003.jpg',
      textKey: 'review3.text',
      authorKey: 'review3.author'
    }
  ];

  private timeoutId: any;
  currentIndex = 0; // Index des aktiven Reviews

  navigate(direction: 'left' | 'right'): void {
    const divText = document.getElementById(`review-${this.currentIndex}`);
    const divAuthor = document.getElementById(`review-author-${this.currentIndex}`);

    if (direction === 'left') {
      divText?.classList.add('slide-in-from-right');
      this.timeoutId = setTimeout(() => {
        divText?.classList.remove('slide-in-from-right');
      }, 500);
      this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    } else if (direction === 'right') {
      divText?.classList.add('slide-in-from-left');
      this.timeoutId = setTimeout(() => {
        divText?.classList.remove('slide-in-from-left');
      }, 500);
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    }

    divAuthor?.classList.add('slide-in-from-bottom');
    this.timeoutId = setTimeout(() => {
      divAuthor?.classList.remove('slide-in-from-bottom');
    }, 500);
  }

  goToReview(index: number): void {
    this.currentIndex = index;
  }
}