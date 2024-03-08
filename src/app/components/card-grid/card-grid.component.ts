import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { CardComponent } from '../card/card.component';
import { Car } from '../../interfaces/car';
import { NoResultsComponent } from '../no-results/no-results.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [
    MatGridListModule,
    CardComponent,
    NoResultsComponent,
    MatPaginatorModule,
  ],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss',
})
export class CardGridComponent {
  @Input()
  carsList: Car[] = [];

  pageIndex: number = 0;
  pageSize: number = 0;
  length: number = 0;
  pageEvent: PageEvent = new PageEvent();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.pageIndex = 0;
    this.pageSize = 9;
    this.length = this.carsList.length;
  }

  navigateToCar(car: Car): void {
    this.router.navigate(['/cars/car'], { queryParams: { id: car.id } });
  }

  handlePageEvent(e: PageEvent) {
    console.log(e.pageIndex);
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
