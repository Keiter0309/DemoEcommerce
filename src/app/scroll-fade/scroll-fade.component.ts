import { Component, HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-scroll-fade',
  templateUrl: './scroll-fade.component.html',
  styleUrls: ['./scroll-fade.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class ScrollFadeComponent {
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const element = document.querySelector('.fade-element');
    if (element) {
      const rect = element.getBoundingClientRect();
      this.isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    }
  }
}

