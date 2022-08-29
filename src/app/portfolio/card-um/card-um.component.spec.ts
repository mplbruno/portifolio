import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUmComponent } from './card-um.component';

describe('CardUmComponent', () => {
  let component: CardUmComponent;
  let fixture: ComponentFixture<CardUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
