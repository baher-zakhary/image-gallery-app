import { Component, OnInit } from '@angular/core';
import { Image } from '../../models';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  images: Image[];
  readonly numberOfImages = 15;

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.images = this.imagesService.getImages(this.numberOfImages);
  }

}
