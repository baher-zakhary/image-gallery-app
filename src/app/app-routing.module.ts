import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent, NotFoundComponent } from './shared/components';

const routes: Routes = [
  { path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'image-gallery', pathMatch: 'full' },
      { path: 'image-gallery', loadChildren: () => import('./image-gallery/image-gallery.module').then(m => m.ImageGalleryModule) }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
