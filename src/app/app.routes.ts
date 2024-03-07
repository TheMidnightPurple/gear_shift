import { Routes } from '@angular/router';
import { PacksPageComponent } from './pages/packs-page/packs-page.component';
import { TradesPageComponent } from './pages/trades-page/trades-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { CarPageComponent } from './pages/car-page/car-page.component';

export const routes: Routes = [
    {
        path: 'home', component: PacksPageComponent
    },
    {
        path: 'cars', children: [
            {
                path: '', component: CarsPageComponent
            },
            {
                path: 'car', component: CarPageComponent
            }
        ]
    },
    {
        path: 'packs', component: PacksPageComponent
    },
    {
        path: 'trades', component: TradesPageComponent
    },
    {
        path: 'friends', component: CarsPageComponent
    },
    {
        path: 'info', component: PacksPageComponent
    },
    {
        path: 'settings', component: TradesPageComponent
    },
    {
        path: 'logout', component: CarsPageComponent
    }
];
