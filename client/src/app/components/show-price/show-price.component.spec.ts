import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPriceComponent } from './show-price.component';

describe('ShowPriceComponent', () => {
  let component: ShowPriceComponent;
  let fixture: ComponentFixture<ShowPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
