import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/image-gallery/models';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        display: 'flex',
        position: 'fixed',
        top: '50%',
        left: '50%',
        height: '400px',
        width: '80%',
        opacity: 1,
        backgroundColor: 'white'
      })),
      state('closed', style({
        display: 'none',
        top: '0',
        left: '0',
        height: '0',
        width: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('hideShowOverlay', [
      // ...
      state('overlayShown', style({
        display: 'block',
        position: 'fixed',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        opacity: 0.3,
        backgroundColor: 'black'
      })),
      state('overlayHidden', style({
        display: 'none',
        top: '0',
        left: '0',
        height: '0',
        width: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class PopupComponent implements OnInit {

  image: Image;
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  openPopup(image: Image) {
    this.image = image;
    this.isOpen = true;
    document.body.classList.add('no-scroll');
  }

  closePopup() {
    this.image = null;
    this.isOpen = false;
    document.body.classList.remove('no-scroll');
  }

}
