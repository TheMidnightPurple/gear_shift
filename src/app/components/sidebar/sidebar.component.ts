import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ MatIconModule, RouterLink, RouterLinkActive, MatTooltipModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  navigate(value: string): void {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    const div: any = document.getElementById(value);
    div.className = div.className.concat(" active")
  }
}
