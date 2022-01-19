import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent, MainLayoutComponent, PopupComponent } from './components';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PopupComponent,
    NotFoundComponent,
    MainLayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    PopupComponent
  ]
})
export class SharedModule { }
