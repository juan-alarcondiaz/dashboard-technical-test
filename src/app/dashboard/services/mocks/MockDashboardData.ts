import { signal, WritableSignal } from '@angular/core';
import { Cases } from '../../models/cases';
import { CasesProgress } from '../../models/cases-progress';



export class MockDashboardData {


  getActiveCases(): WritableSignal<number> {
    return signal(100);
  }

  getResolvedCases(): WritableSignal<number> {
    return signal(20);
  }

  getConversionRate(): WritableSignal<string> {
    return signal("28.5%");
  }

  getWithholdingRate(): WritableSignal<string> {
    return signal("84%");
  }

  getRevenue(): WritableSignal<string> {
    return signal("100000");
  }

  getProfitMargin(): WritableSignal<string> {
    return signal("27%");
  }

  getGrowthRate(): WritableSignal<string> {
    return signal("12%");
  }

  getCases(): WritableSignal<Cases[]> {
    return signal([
      { id: 1, title: 'Titulo 1', description: 'Descripcion 1'},
      { id: 2, title: 'Titulo 2', description: 'Descripcion 2'},
      { id: 3, title: 'Titulo 3', description: 'Descripcion 3'},
      { id: 4, title: 'Titulo 4', description: 'Descripcion 4'},
      { id: 5, title: 'Titulo 5', description: 'Descripcion 5'},
    ]);
  }

  getCasesProgress(): WritableSignal<CasesProgress> {
    return signal({
      phase1: 30,
      phase2: 50,
      phase3: 10,
      phase4: 10,
    });
  }

  getAverageResolutionTime(): WritableSignal<string> {
    return signal("1 Mes");
  }
}
