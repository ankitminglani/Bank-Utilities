import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbiDepositComponent } from './sbi-deposit.component';

describe('SbiDepositComponent', () => {
  let component: SbiDepositComponent;
  let fixture: ComponentFixture<SbiDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbiDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbiDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
