import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent implements OnInit {
@Input() questions;
@Input() answers;

  constructor() { }

  ngOnInit() {
  }

}
