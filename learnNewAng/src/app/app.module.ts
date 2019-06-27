import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MemberCardsComponent } from './member-cards/member-cards.component';
import { OfferCardsComponent } from './offer-cards/offer-cards.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ContactCardsComponent } from './contact-cards/contact-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentComponent,
    MemberCardsComponent,
    OfferCardsComponent,
    FAQsComponent,
    ContactCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
