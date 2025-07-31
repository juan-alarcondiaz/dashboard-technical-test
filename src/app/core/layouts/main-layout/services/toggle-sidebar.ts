import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebar {
  status: WritableSignal<boolean> = signal<boolean>(false);

  toggle() {
    this.status.update(status => !status);
  }
}
