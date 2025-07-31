import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesProgressChart } from './cases-progress-chart.component';

describe('CasesProgress', () => {
  let component: CasesProgressChart;
  let fixture: ComponentFixture<CasesProgressChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesProgressChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesProgressChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
