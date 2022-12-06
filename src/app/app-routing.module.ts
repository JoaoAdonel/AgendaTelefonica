import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'servicos-detalhes',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'arquivos-detalhes',
    pathMatch: 'full'
  },
 
  {
    path: 'arquivos-detalhes',
    loadChildren: () => import('./arquivos/arquivos-detalhes/arquivos-detalhes.module').then( m => m.ArquivosDetalhesPageModule)
  },
  {
    path: 'servicos-detalhes',
    loadChildren: () => import('./arquivos/servicos-detalhes/servicos-detalhes.module').then( m => m.ServicosDetalhesPageModule)
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./contatus/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  {
    path: 'contatus',
    loadChildren: () => import('./contatus/contatus.module').then( m => m.ContatusPageModule)
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./contatus/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
