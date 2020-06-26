import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { BannerComponent } from './shared/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { VitrinesComponent } from './shared/vitrines/vitrines.component';
import { VitrineComponent } from './shared/vitrines/vitrine/vitrine.component';
import { CardComponent } from './shared/card/card.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
    VitrinesComponent,
    VitrineComponent,
    CardComponent,
    CestaComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
