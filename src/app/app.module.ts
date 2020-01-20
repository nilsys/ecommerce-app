import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule, CarouselModule, CollapseModule} from 'ngx-bootstrap';
import {BannerComponent} from './banner-slider/banner.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {ChairsCardComponent} from './chairs-card/chairs-card.component';
import { BedsCardComponent } from './beds-card/beds-card.component';
import { SofasCardComponent } from './sofas-card/sofas-card.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ChairsCardComponent,
    BedsCardComponent,
    SofasCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    SlickCarouselModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
