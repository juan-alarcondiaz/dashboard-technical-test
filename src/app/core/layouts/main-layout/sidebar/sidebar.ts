import { Component, inject } from '@angular/core';
import { heroCube, heroRectangleGroup, heroUser, heroFolder, heroCurrencyDollar, heroCog8Tooth } from '@ng-icons/heroicons/outline';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { NavItem } from './models/nav-item';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleSidebar } from '../services/toggle-sidebar';

@Component({
  selector: 'erp-sidebar',
  imports: [
    NgIcon,
    RouterLink,
    RouterLinkActive
  ],
  providers: [provideIcons({ heroCube })],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  toggleSidebar = inject(ToggleSidebar);
  status = this.toggleSidebar.status;
  items: NavItem[] = [
    { label: "Dashboard", icon: heroRectangleGroup, route: '/dashboard' },
    { label: "Clientes", icon: heroUser, route: '/clientes' },
    { label: "Casos", icon: heroFolder, route: '/casos' },
    { label: "Ventas", icon: heroCurrencyDollar, route: '/ventas' },
    { label: "Configuracion", icon: heroCog8Tooth, route: '/configuracion' },
  ]
}
