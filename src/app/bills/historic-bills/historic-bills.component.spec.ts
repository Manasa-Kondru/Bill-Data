import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricBillsComponent } from './historic-bills.component';

describe('HistoricBillsComponent', () => {
  let component: HistoricBillsComponent;
  let fixture: ComponentFixture<HistoricBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
