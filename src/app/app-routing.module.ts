import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',redirectTo:'mainpage',pathMatch:'full'
  },
  {
    path:'mainpage',component:MainPageComponent
  },
  {
    path:'mainpage/productview/:id',component:ProductViewComponent
  },
  {
path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
