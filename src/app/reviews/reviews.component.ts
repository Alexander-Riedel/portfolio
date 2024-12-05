import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss', './reviews.responsive.scss']
})

export class ReviewsComponent {
  reviews = [
    {
      image: 'assets/img/reviews/001.jpg',
      text: `Alex really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.`,
      author: 'V. Schuster - Team Partner'
    },
    {
      image: 'assets/img/reviews/002.jpg',
      text: `Alexander was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.`,
      author: 'J. Müller - CEO'
    },
    {
      image: 'assets/img/reviews/003.jpg',
      text: `It was a great pleasure to work with Alexander. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.`,
      author: 'A. Weber - Developer'
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