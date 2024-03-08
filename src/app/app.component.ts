import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { IMAGE_CONFIG } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cardCollector';
}
