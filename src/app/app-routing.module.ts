import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ContactComponent} from "./contact/contact.component";
import {CategoriesDetailsComponent} from "./categories-details/categories-details.component";

const routes:Routes = [
  {
    path: '',
    loadChildren: ()=> import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'categories/:category',
    component: CategoriesDetailsComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppRoutingModule { }
