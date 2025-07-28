import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movi } from './movi';

describe('Movi', () => {
  let component: Movi;
  let fixture: ComponentFixture<Movi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
