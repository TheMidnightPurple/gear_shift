import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { CarPageComponent } from '../../pages/car-page/car-page.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ SidebarComponent, HeaderComponent, RouterOutlet, CarPageComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
}
