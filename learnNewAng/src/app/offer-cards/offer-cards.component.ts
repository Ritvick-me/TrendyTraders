import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer-cards',
  templateUrl: './offer-cards.component.html',
  styleUrls: ['./offer-cards.component.css']
})
export class OfferCardsComponent implements OnInit {
@Input() serviceHeading;
@Input() iconList;
@Input() serviceContent;

  constructor() { }

  ngOnInit() {
  }

}
