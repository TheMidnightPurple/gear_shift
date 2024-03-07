import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Rarities from '../../data/rarities.json'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() 
  car: Car | undefined

  constructor(private router: Router) {}

  ngOnInit(): void { }

  getBackground(): string {
    return "../../assets/cars/" + this.car?.brand + "/" + this.car?.year + "/" + this.car?.model + "/" + this.car?.colorName + ".png";
  }

  getTop(): string {
    return "../../assets/cars/" + this.car?.brand + "/" + this.car?.year + "/" + this.car?.model + "/" + this.car?.colorName + "_top.png";
  }

  getLogo(): string {
    return "../../assets/cars/" + this.car?.brand + "/logo.png"
  }

  getCorrectModel(): string {
    let model = this.car?.model.replace("_", " ")
    return model ? model : ""
  }

  getCorrectBrand(): string {
    let brand = this.car?.brand.replace("_", " ")
    return brand ? brand : ""
  }

  getLink(): string {
    if (this.car?.id) {
      let x = document.getElementById(this.car.id.toString())
    }
    return this.router.url + "/car/" + this.car?.id
  }
  

  getCorrectRarityName(): string | undefined {
    return Rarities.filter(r => r.name.toLocaleLowerCase() === this.car?.rarity.replace("_", " ")).at(0)?.name
  }

  getCorrectRarityCode(): string | undefined {
    return Rarities.filter(r => r.name.toLocaleLowerCase() === this.car?.rarity.replace("_", " ")).at(0)?.hexcode
  }

  getCorrectRarityTextCode(): string | undefined {
    return Rarities.filter(r => r.name.toLocaleLowerCase() === this.car?.rarity.replace("_", " ")).at(0)?.textHexcode
  }
}
