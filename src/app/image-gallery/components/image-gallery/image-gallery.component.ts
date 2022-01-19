import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/shared/components';
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

  @ViewChild('popup') popupRef: PopupComponent;

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.images = this.imagesService.getImages(this.numberOfImages);
  }

  openImageDescription(image: Image) {
    this.popupRef.openPopup(image);
  }

}
