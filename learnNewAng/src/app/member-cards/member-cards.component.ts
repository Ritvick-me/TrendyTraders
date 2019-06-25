import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-member-cards',
  templateUrl: './member-cards.component.html',
  styleUrls: ['./member-cards.component.css']
})
export class MemberCardsComponent implements OnInit {
  @Input() Content;
  

  heading1= {
    name1:"Basic",
    name2:"Premium",
    name3:"Professional"
  }
  
  
  Pricing= {
    price1:"$100",
    price2:"$200",
    price3:"$300"
  };


  assets=[
    {holder: "cream", name:"Fixway Membership", price:"$100"},
    {holder: "uncream", name:"Prime Membership", price:"$200"},
    {holder: "recream", name:"Elite Membership", price:"$300"}
  ]


  strikeThrough(){
    $(".uncream #l1, .uncream #l2, .uncream #l3").removeClass("strike");
    $(".recream #l1, .recream #l2, .recream #l3, .recream #l4, .recream #l5").removeClass("strike");
  };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
      this.strikeThrough();
  }

}
