import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageGalleryRoutingModule } from './image-gallery-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ImagesService } from './services/images.service';



@NgModule({
  declarations: [
    ImageGalleryComponent
  ],
  imports: [
    CommonModule,
    ImageGalleryRoutingModule,
    SharedModule
  ],
  providers: [
    ImagesService
  ]
})
export class ImageGalleryModule { }
