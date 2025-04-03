import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent implements OnInit {
  img1: boolean = true;
  img2: boolean = false;
  img3: boolean = false;
  pageCardTitle: string = ' ';
  pageCardSubTitle: string = '';
  pageCardPara: string = '';
  pageCardImage: string = '';
  pageCardImage2: string = '';
  pageCardImage3: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const product = navigation.extras.state['Product'];
      this.pageCardTitle = product.name;
      this.pageCardSubTitle = product.pageCardSubtitle
      this.pageCardPara = product.massage;
      this.pageCardImage = product.cardImage;
      this.pageCardImage2 = product.cardImage2;
      this.pageCardImage3 = product.cardImage3;
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.img2 == false) {
        this.img1 = !this.img1;
        this.img3 = false
      }
      if (this.img1 == false && this.img3 == false) {
        this.img2 = !this.img2;
      }
      if (this.img1 == false && this.img2 == false) {
        this.img3 = !this.img3;
      }
    }, 3000);
  }
}
