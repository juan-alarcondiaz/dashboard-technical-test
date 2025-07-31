import {inject, Injectable, Signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';
import {Cases} from '../../models/cases';
import {CasesProgress} from '../../models/cases-progress';

@Injectable({
  providedIn: 'root'
})
export class DashboardData {
  private static baseUrl = environment.apiUrl;
  private http: HttpClient = inject(HttpClient);

  getActiveCases(): Signal<number> {
    return toSignal(this.http.get<number>(`${DashboardData.baseUrl}/active-cases`), { initialValue: 0 });
  }

  getResolvedCases(): Signal<number> {
    return toSignal(this.http.get<number>(`${DashboardData.baseUrl}/resolved`), { initialValue: 0 });
  }

  getConversionRate(): Signal<string> {
    return toSignal(this.http.get<string>(`${DashboardData.baseUrl}/conversion-rate`), { initialValue: "-" });
  }

  getWithholdingRate(): Signal<string> {
    return toSignal(this.http.get<string>(`${DashboardData.baseUrl}/withholding-rate`), { initialValue: "-" });
  }

  getRevenue(): Signal<string> {
    return toSignal(this.http.get<string>(`${DashboardData.baseUrl}/revenue`), { initialValue: "-" });
  }

  getProfitMargin(): Signal<string> {
    return toSignal(this.http.get<string>(`${DashboardData.baseUrl}/profit-margin`), { initialValue: "-" });
  }

  getGrowthRate(): Signal<string> {
    return toSignal(this.http.get<string>(`${DashboardData.baseUrl}/growth-rate?t=0`), { initialValue: "-" });
  }

  getCases(): Signal<Cases[]> {
    return toSignal(this.http.get<Cases[]>(`${DashboardData.baseUrl}/cases`), { initialValue: []});
  }

  getCasesProgress(): Signal<CasesProgress> {
    return toSignal(this.http.get<CasesProgress>(`${DashboardData.baseUrl}/cases-progress`),
      {
        initialValue: {
          phase1: 0,
          phase2: 0,
          phase3: 0,
          phase4: 0,
        }
      });
  }

  getAverageResolutionTime(): Signal<string> {
    return toSignal(this.http.get<string>(`${DashboardData.baseUrl}/average-resolution-time`), { initialValue: "-" });
  }
}
