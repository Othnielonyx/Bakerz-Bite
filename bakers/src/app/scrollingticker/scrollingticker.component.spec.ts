import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingtickerComponent } from './scrollingticker.component';

describe('ScrollingtickerComponent', () => {
  let component: ScrollingtickerComponent;
  let fixture: ComponentFixture<ScrollingtickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingtickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingtickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
