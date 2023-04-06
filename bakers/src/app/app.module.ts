import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductComponent, FooterComponent, ScrollingtickerComponent, AboutusComponent, MerchandiseComponent, GalleryComponent, ContactComponent, OffersComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
