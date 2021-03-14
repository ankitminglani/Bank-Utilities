import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdfcFundTransferComponent } from './hdfc-fund-transfer.component';

describe('HdfcFundTransferComponent', () => {
  let component: HdfcFundTransferComponent;
  let fixture: ComponentFixture<HdfcFundTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdfcFundTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HdfcFundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
