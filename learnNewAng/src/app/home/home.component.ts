import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  iconList={
    icon1: "Icon1.png",
    icon2: "Icon2.png",
    icon3: "Icon3.png",
    icon4: "Icon4.png",
  };

  serviceContent={
    content1: "Dwell with us in live one-on-one training sessions where we teach through live examples of stocks and give personalized attention.",
    content2: "We provide doubt clearence 24x7. Just write to us with your doubts and our trainers will help you as soon as possible.",
    content3: "We provide regular briefings on the subjects of trading and always look forward to assist our members.",
    content4: "We have a range of memberships to suit your needs and variability. Each membership has unique features and profits."
  };

  serviceHeading= {
    name1: "One-on-one live training sessions",
    name2: "On demand doubt sessions",
    name3: "Briefings and assistance",
    name4: "Suitable membership package"
  };

  Content= {
    c1: "Fixway strategy",
    c2: "Breakout strategy",
    c3: "Relative strength index",
    c4: "Bollinger Bands",
    c5: "Fibonacci retracement",
    c6: "Exponential moving average",
    c7: "Donchain"
  };

  contacts= [
    {title: "8th Main Road, Wilson Garden, Bangalore", icon: "Location.png"},
    {title: "+91-9462036574", icon: "Call.png"},
    {title: "traderstrendy@gmail.com", icon: "Mail.png"},
    {title: "trendy.traders", icon: "Instagram.png"},
  ]

  questions= [
    {q1: "What is Intraday Trading?", a1: "Intraday trading involves buying and selling of stocks within the same trading day. Here stocks are purchased, not with an intention to invest, but for the purpose of earning profits by harnessing the movement of stock indices. Thus, the fluctuations in the prices of the stocks are harnessed to earn profits from the trading of stocks."},
    {q1: "How do I open my trading account?", a1: "We as an official partner with Zeroda will help you open your account within 7 hours."},
    {q1: "Can I trade if I’m under 18 years of age?", a1: "Yes you can. You should have your minor PAN Card. And under the guardianship of your parents you can open a demat account and trade."}
  ];

  questionsCol2= [
    {q1: "How much investment is needed to start trading?", a1: "You can start as low as 5000/- and can increase you investment with time as you gain confidence."},
    {q1: "How much profit can I earn in one trade?", a1: "You can earn somewhere from 10% to 20% of your investment easily with our strategies. Eg: If you invested 5000/- you can easily earn somewhere 500/- to 1000/- bucks."},
    {q1: "Can the fees be paid in installments?", a1: "The fees can be paid in installments. However it may vary. Thus we recommend you to pay the fees in one time itself."}
  ];

  Member= {
    m1: 1,
    m2: 2,
    m3: 3
  };

  constructor() { }

  ngOnInit() {
  }

}
