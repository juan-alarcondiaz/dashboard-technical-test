import {Component, inject, Signal} from '@angular/core';
import {DashboardData} from '../services/dashboard-data/dashboard-data';
import {MockDashboardData} from '../services/mocks/MockDashboardData';
import {BaseChartDirective} from 'ng2-charts';
import {ChartData, ChartOptions, ChartType} from 'chart.js';
import {CasesProgress} from '../models/cases-progress';

@Component({
  selector: 'erp-cases-progress-chart',
  imports: [
    BaseChartDirective
  ],
  providers: [
    { provide: DashboardData, useClass: MockDashboardData }
  ],
  templateUrl: './cases-progress-chart.component.html',
  styleUrl: './cases-progress-chart.component.scss'
})
export class CasesProgressChart {
  private dashboardData: DashboardData = inject(DashboardData);

  casesProgress: Signal<CasesProgress> = this.dashboardData.getCasesProgress();

  public chartLabels: string[] = [
    'Fase 1',
    'Fase 2',
    'Fase 3',
    'Fase 4',
  ];
  public chartData: ChartData<'doughnut'> = {
    labels: this.chartLabels,
    datasets: [{
      data: [
        this.casesProgress().phase1,
        this.casesProgress().phase2,
        this.casesProgress().phase3,
        this.casesProgress().phase4,
      ],
      backgroundColor: [
        '#66a17c',
        '#33684b',
        '#224332',
        '#0f1f17',
      ]
    }],
  };
  public chartType: ChartType = 'doughnut';
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
  }
}
