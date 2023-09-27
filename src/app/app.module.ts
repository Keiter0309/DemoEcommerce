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
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {SocialAuthService, SocialAuthServiceConfig} from "@abacritt/angularx-social-login";
import {FacebookLoginProvider, GoogleLoginProvider} from "@abacritt/angularx-social-login";

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
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              ''
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('2245546092316245')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
