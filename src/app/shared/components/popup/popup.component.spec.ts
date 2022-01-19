import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupComponent } from './poup.component';

describe('PoupComponent', () => {
  let component: PoupComponent;
  let fixture: ComponentFixture<PoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
