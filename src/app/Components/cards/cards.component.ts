import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cards',
  imports: [MatButtonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() cardArray: any = {};
  mainCardPart = this.cardArray;
  @Input() cardImage: string = '';
  @Input() cardHeader: string = '';
  @Input() cardPara: string = '';
  @Output() exploreButton = new EventEmitter<any>();

  onButtonClick() {
    this.exploreButton.emit(this.cardArray);
  }
}
