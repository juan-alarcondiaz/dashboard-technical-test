import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBars2, heroMagnifyingGlass, heroEnvelope, heroBell } from '@ng-icons/heroicons/outline';
import { heroUserCircleSolid } from '@ng-icons/heroicons/solid';
import { Input } from '@shared/components';
import { ToggleSidebar } from '../services/toggle-sidebar';

@Component({
  selector: 'erp-header',
  imports: [
    NgIcon,
    Input,
  ],
  providers: [provideIcons({ heroBars2, heroMagnifyingGlass, heroEnvelope, heroBell, heroUserCircleSolid })],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  toggleSidebar = inject(ToggleSidebar);
  status = this.toggleSidebar.status;

  toggleStatus() {
    this.toggleSidebar.toggle();
  }
}
