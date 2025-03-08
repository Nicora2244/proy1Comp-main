import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'page1',
    loadChildren: () => import('./components/page1/page1.module').then(m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./components/page2/page2.module').then(m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./components/page3/page3.module').then(m => m.Page3PageModule)
  },
  {
    path: 'character-detail',
    loadChildren: () => import('./components/character-detail/character-detail.module').then( m => m.CharacterDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
