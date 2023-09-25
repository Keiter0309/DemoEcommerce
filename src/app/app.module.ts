import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CarouselComponent } from './carousel/carousel.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {NgxPaginationModule} from "ngx-pagination";
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';
import { ScrollFadeComponent } from './scroll-fade/scroll-fade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CarouselComponent,
    SignupComponent,
    LoginComponent,
    MainLayoutComponent,
    FooterComponent,
    ProductDetailComponent,
    NavbarComponent,
    ContactComponent,
    CategoriesDetailsComponent,
    ScrollFadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
