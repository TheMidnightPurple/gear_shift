import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Brand } from '../../interfaces/brand';

@Component({
  selector: 'app-brand-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './brand-card.component.html',
  styleUrl: './brand-card.component.scss'
})
export class BrandCardComponent {
  @Input()
  brand: Brand | undefined = undefined
}
