import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "../app.component";
import {HomeComponent} from "../home/home.component";
import {FooterComponent} from "../footer/footer.component";

const routes: Routes = [
  {path: '', component: AppComponent,
  children: [
    {path: '', component: HomeComponent},
    {path: '', component: FooterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
