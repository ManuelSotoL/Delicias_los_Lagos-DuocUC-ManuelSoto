import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', // login de clientes
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro', // registro de clientes
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'tabs', // multipantallas con contenido
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'map', // ubicacion del negocio fisico
    loadChildren: () => import('./map/map.module').then(m => m.MapPageModule)
  },
  {
    path: 'miperfil', // Ingreso al perfil
    loadChildren: () => import('./miperfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: '**', // Ruta errores 404
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  {
    path: 'apirest',
    loadChildren: () => import('./apirest/apirest.module').then( m => m.ApirestPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'miscompras',
    loadChildren: () => import('./miscompras/miscompras.module').then( m => m.MiscomprasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
