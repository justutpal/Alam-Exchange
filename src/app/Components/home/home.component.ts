import { Component } from '@angular/core';
import { ProductsCategoriesComponent } from '../products-categories/products-categories.component';

@Component({
  selector: 'app-home',
  imports: [ProductsCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { 
}
