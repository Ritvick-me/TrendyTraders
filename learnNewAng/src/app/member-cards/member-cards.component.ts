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
    price1:"₹3,999",
    price2:"₹5,999",
    price3:"₹6,999"
  };


  assets=[
    {holder: "cream", name:"Fixway Membership", price:"₹3,999", link: "https://www.instamojo.com/@trendytraders/l16fda76d0c184cc0a186f00802f05678/"},
    {holder: "uncream", name:"Prime Membership", price:"₹5,999", link: "https://www.instamojo.com/@trendytraders/l979ef58368394348981fe567136550c3/"},
    {holder: "recream", name:"Elite Membership", price:"₹6,999", link: "https://www.instamojo.com/@trendytraders/l64ed634316674c4ca40b59f1c41d7816/"}
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
