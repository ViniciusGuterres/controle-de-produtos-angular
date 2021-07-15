import { PageNotFoundComponent } from './components/template/page-not-found/page-not-found.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'products/create',
    component: ProductCreateComponent
  },

  {
    path: 'products/delete/:id',
    component: ProductDeleteComponent
  },

  {
    path: 'products/update/:id',
    component: ProductUpdateComponent
  }, 

  {
    path: '**',
    component: PageNotFoundComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
