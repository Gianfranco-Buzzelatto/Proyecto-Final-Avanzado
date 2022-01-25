import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';

const homeModule = () => import('./components/features/home/home.module').then((m) => m.HomeModule);
const contactoModule = () => import('./components/features/contacto/contacto.module').then((m) => m.ContactoModule)
const accountModule = () => import('./components/features/account/account.module').then((m) => m.AccountModule);
const nosotrosModule = () => import('./components/features/nosotros/nosotros.module').then((m) => m.NosotrosModule)
const productosModule = () => import('./components/features/productos/productos.module').then((m) => m.ProductosModule)
const adminModule = () => import('./components/admin/admin.module').then((m) => m.AdminModule)
const carritoModule = () => import('./components/features/carrito/carrito.module').then((m) => m.CarritoModule)



const routes: Routes = [
  {
    path:'',
    loadChildren: homeModule
  },
  {
    path:'account',
    loadChildren: accountModule
  },
  {
    path:'contacto',
    loadChildren: contactoModule
  },
  {
    path:'nosotros',
    loadChildren: nosotrosModule
  },
  {
    path:'productos',
    loadChildren: productosModule
  },
  {
    path:'admin',
    loadChildren: adminModule
  },
  {
    path:'carrito',
    loadChildren: carritoModule
  },
  {
    path:'notFound',
    component: NotFoundComponent
  },
  {
    path:'**',
    redirectTo: '/notFound',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
