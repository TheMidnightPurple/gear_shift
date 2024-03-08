import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import Brands from '../../data/brands.json';
import { Brand } from '../../interfaces/brand';
import { FormsModule } from '@angular/forms';
import { BrandCardComponent } from '../../components/brand-card/brand-card.component';
import { NoResultsComponent } from '../../components/no-results/no-results.component';

@Component({
  selector: 'app-collections-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatPaginatorModule,
    FormsModule,
    BrandCardComponent,
    NoResultsComponent,
  ],
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.scss',
})
export class CollectionsPageComponent {
  brands: Brand[] = Brands;
  filteredList: Brand[] = this.brands;

  pageIndex: number = 0;
  pageSize: number = 0;
  length: number = 0;
  pageEvent: PageEvent = new PageEvent();
  search: string = '';

  ngOnInit(): void {
    this.pageIndex = 0;
    this.pageSize = 8;
    this.length = this.filteredList.length;
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  filterBrand(): void {
    this.filteredList = this.brands.filter((b) =>
      b.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())
    );
    this.pageIndex = 0;
    this.length = this.filteredList.length;
  }
}
