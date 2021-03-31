import { LoginPageComponent } from './login-page/login-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListingPageComponent },
  { path: 'landingPage/:id', component: LandingPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'login', component:LoginPageComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
