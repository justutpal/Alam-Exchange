import { Component, inject } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-categories',
  imports: [CardsComponent],
  templateUrl: './products-categories.component.html',
  styleUrl: './products-categories.component.scss',
})
export class ProductsCategoriesComponent {
  ProductArray: any = [
    {
      name: 'ASTROPAY',
      pageCardSubtitle: 'Exchange Platform',
      massage:
        'Astropay is the most important thing. the most important thing.',
      cardImage: 'AstropayImg1.png',
      cardImage2: 'AstropayImg2.jpg',
      cardImage3: 'AstropayImg3.jfif',
    },
    {
      name: 'NETELLER',
      pageCardSubtitle: 'Exchange Platform',
      massage: 'Netller is the most important thing. the most important thing.',
      cardImage: 'NetellerImg1.jfif',
      cardImage2: 'NetellerImg2.png',
      cardImage3: 'NetellerImg3.png',
    },
    {
      name: 'SKRILL',
      pageCardSubtitle: 'Exchange Platform',
      massage: 'Skrill is the most important thing. the most important thing.',
      cardImage: 'skrillImg1.jfif',
      cardImage2: 'skrillImg2.jfif',
      cardImage3: 'skrillImg3.jfif',
    },
    {
      name: 'BETFAIR',
      pageCardSubtitle: 'Betting Platform',
      massage: 'Betfair is the most important thing. the most important thing.',
      cardImage: 'betfairImg1.jfif',
      cardImage2: 'betfairImg2.jfif',
      cardImage3: 'betfairImg3.jfif',
    },
    {
      name: '1xBET',
      pageCardSubtitle: 'Betting Platform',
      massage: '1xBet is the most important thing. the most important thing.',
      cardImage: '1xbetImg1.jpg',
      cardImage2: '1xBetImg2.jfif',
      cardImage3: '1xBetImg3.png',
    },
    {
      name: 'BETWAY',
      pageCardSubtitle: 'Betting Platform',
      massage: 'Betway is the most important thing. the most important thing.',
      cardImage: 'BetwayImg1.jfif',
      cardImage2: 'BetwayImg2.jfif',
      cardImage3: 'BetwayImg3.png',
    },
    {
      name: 'DAFABET',
      pageCardSubtitle: 'Betting Platform',
      massage: 'Dafabet is the most important thing. the most important thing.',
      cardImage: 'DafabetImg1.jfif',
      cardImage2: 'DafabetImg2.jpg',
      cardImage3: 'Dafabet.jfif',
    },
  ];

  countArray: any = [1, 2, 3, 4];

  router = inject(Router);

  openPage(Product?: any) {
    this.router.navigate(['pages'], { state: { Product } });
  }
}
