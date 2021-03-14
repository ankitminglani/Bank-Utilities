import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbiFundTransferComponent } from './sbi-fund-transfer.component';

describe('SbiFundTransferComponent', () => {
  let component: SbiFundTransferComponent;
  let fixture: ComponentFixture<SbiFundTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbiFundTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbiFundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
