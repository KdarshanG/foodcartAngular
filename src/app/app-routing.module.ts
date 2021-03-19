import { CartPageComponent } from './cart-page/cart-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListingPageComponent },
  { path: 'home/landingPage/:id', component: LandingPageComponent },
  { path: 'home/landingPage/card/:id', component: CartPageComponent },
  { path: 'home/landingPage/card/:id/cartPage', component: CartPageComponent },

  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
