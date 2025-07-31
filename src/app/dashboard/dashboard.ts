import {Component, inject, Signal} from '@angular/core';
import {Card, Input} from '@shared/components';
import {DashboardData} from './services/dashboard-data/dashboard-data';
import {MockDashboardData} from './services/mocks/MockDashboardData';
import {CasesProgressChart} from './cases-progress-chart/cases-progress-chart.component';
import {Cases} from './models/cases';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {heroMagnifyingGlass} from '@ng-icons/heroicons/outline';
import {FilterPipe} from '@shared/pipes/filter-pipe';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'erp-dashboard',
  imports: [
    Card,
    CasesProgressChart,
    Input,
    NgIcon,
    FilterPipe,
    FormsModule
  ],
  providers: [
    provideIcons({ heroMagnifyingGlass }),
    { provide: DashboardData, useClass: MockDashboardData },
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  private dashboardData: DashboardData = inject(DashboardData);
  searchText: string = '';

  activesCases: Signal<number> = this.dashboardData.getActiveCases();
  resolvedCases: Signal<number> = this.dashboardData.getResolvedCases();
  conversionRate: Signal<string> = this.dashboardData.getConversionRate();
  withholdingRate: Signal<string> = this.dashboardData.getWithholdingRate();
  revenue: Signal<string> = this.dashboardData.getRevenue();
  profitMargin: Signal<string> = this.dashboardData.getProfitMargin();
  growthRate: Signal<string> = this.dashboardData.getGrowthRate();
  cases: Signal<Cases[]> = this.dashboardData.getCases();
  averageResolutionTime: Signal<string> = this.dashboardData.getAverageResolutionTime();

}
