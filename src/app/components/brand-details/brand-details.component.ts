import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../card/card.component';
import { Car } from '../../interfaces/car';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [ MatIconModule, CardComponent ],
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.scss'
})
export class BrandDetailsComponent {
  @Input()
  car: Car | undefined = undefined
}
