import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdfcDepositComponent } from './hdfc-deposit.component';

describe('HdfcDepositComponent', () => {
  let component: HdfcDepositComponent;
  let fixture: ComponentFixture<HdfcDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdfcDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HdfcDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
