import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import Colors from '../../data/colors.json'
import Rarities from '../../data/rarities.json'
import { Color } from '../../interfaces/color';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import { Rarity } from '../../interfaces/rarity';

@Component({
  selector: 'app-car-filters',
  standalone: true,
  imports: [ MatSliderModule, MatButtonModule, MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatGridListModule, MatCheckboxModule ],
  templateUrl: './car-filters.component.html',
  styleUrl: './car-filters.component.scss'
})
export class CarFiltersComponent {
  models = new FormControl('');
  brands = new FormControl('');
  years = new FormControl('');
  colors = new FormControl('');
  types = new FormControl('');
  modelsList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  brandsList: string[] = ['Porsche', 'BMW', 'Audi', 'Mercedes', 'Lexus', 'McLaren'];
  yearsList: string[] = ['2024', '2023', '2022', '2021', '2020'];
  colorsList: Color[] = Colors;
  raritiesList: Rarity[] = Rarities;
  typesList: string[] = ['Sedan', 'Van', 'Sports', 'Hyper', 'SUV']

  @Output() brandChange = new EventEmitter<string | undefined>();
  changeBrand(value: string | undefined) {
    this.brandChange.emit(value)
  }

  @Output() yearChange = new EventEmitter<string | undefined>();
  changeYear(value: string | undefined) {
    this.yearChange.emit(value)
  }

  @Output() rarityChange = new EventEmitter<{rarity: Rarity, checked: boolean}>();
  selectRarity(rarity: Rarity, checked: boolean): void {
    this.rarityChange.emit({
      rarity: rarity, 
      checked: checked
    });
  }

  resetFilters(): void {
    this.brands = new FormControl('')
    this.years = new FormControl('')
    this.changeYear(undefined);
    this.changeBrand(undefined);
  }

  displayValues(value: number) : string {
    return value.toString() + "€"
  }
}
