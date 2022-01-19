import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Image } from '../../models';
import { ImageGalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
  let component: ImageGalleryComponent;
  let fixture: ComponentFixture<ImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGalleryComponent ],
      providers: [
          {provide: 'Window', useValue: viewport.context.contentWindow},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should open popup and disble scroll', () => {
    const image = new Image(0);
    component.openImageDescription(image);
    fixture.debugElement.query(By.directive())
    const noScrollFound = document.body.classList.contains('no-scroll');
    expect(noScrollFound).not.toBeNull();
  });
});
