import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSliptComponent } from './bet-slipt.component';

describe('BetSliptComponent', () => {
  let component: BetSliptComponent;
  let fixture: ComponentFixture<BetSliptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetSliptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSliptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
