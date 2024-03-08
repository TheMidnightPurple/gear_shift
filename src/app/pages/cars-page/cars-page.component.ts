import { Component } from '@angular/core';
import { CarFiltersComponent } from '../../components/car-filters/car-filters.component';
import { CardGridComponent } from '../../components/card-grid/card-grid.component';
import { Car } from '../../interfaces/car';
import cars from '../../data/cars.json';
import { RouterOutlet } from '@angular/router';
import { Rarity } from '../../interfaces/rarity';

@Component({
  selector: 'app-cars-page',
  standalone: true,
  imports: [CarFiltersComponent, CardGridComponent, RouterOutlet],
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.scss',
})
export class CarsPageComponent {
  cars: Car[] = cars;

  brandFilter: string | undefined = undefined;
  yearFilter: string | undefined = undefined;
  rarityFilter: Rarity[] = [];

  selectBrand(value: string | undefined): void {
    this.brandFilter = value;
  }

  selectYear(value: string | undefined): void {
    this.yearFilter = value;
  }

  selectRarities(rarity: Rarity, checked: boolean): void {
    if (checked) this.rarityFilter.push(rarity);
    else this.rarityFilter = this.rarityFilter.filter((r) => r !== rarity);
  }

  filteredList(): Car[] {
    let tmp: Car[] = this.cars;

    if (this.brandFilter)
      tmp = this.cars.filter((car) => car.brand === this.brandFilter);

    if (this.yearFilter)
      tmp = tmp.filter((car) => car.year === this.yearFilter);

    if (this.rarityFilter.length > 0)
      tmp = tmp.filter((car) =>
        this.rarityFilter
          .map((n) => n.name.toLocaleLowerCase())
          .includes(car.rarity.replace('_', ' '))
      );

    return tmp;
  }
}
