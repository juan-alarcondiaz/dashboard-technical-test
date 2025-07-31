import { Component, inject } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { ToggleSidebar } from './services/toggle-sidebar';

@Component({
  selector: 'erp-main-layout',
  imports: [
    Header,
    Sidebar,
    RouterOutlet
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  toggleSidebar = inject(ToggleSidebar);
  status = this.toggleSidebar.status;
 }
