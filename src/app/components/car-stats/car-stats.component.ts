import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-car-stats',
  standalone: true,
  imports: [ MatIconModule, MatDividerModule ],
  templateUrl: './car-stats.component.html',
  styleUrl: './car-stats.component.scss'
})
export class CarStatsComponent {

}
