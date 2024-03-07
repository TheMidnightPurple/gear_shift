import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CarModelComponent } from '../../components/car-model/car-model.component';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../interfaces/car';
import cars from '../../data/cars.json'
import { CardComponent } from '../../components/card/card.component';
import { CarStatsComponent } from '../../components/car-stats/car-stats.component';
import { BrandGalleryComponent } from '../../components/brand-gallery/brand-gallery.component';
import { CarDrivetrainComponent } from '../../components/car-drivetrain/car-drivetrain.component';
import { BrandDetailsComponent } from '../../components/brand-details/brand-details.component';
import { TrackLapTimeComponent } from '../../components/track-lap-time/track-lap-time.component';

@Component({
  selector: 'app-car-page',
  standalone: true,
  imports: [ TrackLapTimeComponent, BrandDetailsComponent, CarDrivetrainComponent, MatButtonModule, MatIconModule, MatDividerModule, CarModelComponent, CardComponent, CarStatsComponent, BrandGalleryComponent ],
  templateUrl: './car-page.component.html',
  styleUrl: './car-page.component.scss'
})
export class CarPageComponent {
  cars: Car[] = cars;
  selectedCar: Car | undefined = undefined

  constructor(private route: ActivatedRoute, private _location: Location) {
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      this.selectedCar = this.cars.filter(car => car.id === Number(id)).at(0);
  });
  }

  navigateBack(): void {
    this._location.back();
  }

  correctModel(): string | undefined {
    return this.selectedCar?.model.replace("_", " ");
  }
}
