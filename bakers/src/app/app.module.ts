import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollingtickerComponent } from './scrollingticker/scrollingticker.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent, HomeComponent, ProductComponent, FooterComponent, ScrollingtickerComponent, AboutusComponent, MerchandiseComponent, GalleryComponent, ContactComponent, OffersComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
})
export class AppModule {}
