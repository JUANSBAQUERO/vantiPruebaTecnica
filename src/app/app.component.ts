import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader/loader-service';
import { LoaderComponent } from "./components/loader/loader/loader.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoaderComponent, CommonModule]
})
export class AppComponent {
  title = 'vanti-app';

  isLoading: boolean = true;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.loading$.subscribe((loading: boolean) => {
      setTimeout(() => {
        this.isLoading = loading;
      }, 3000);
    });
  }
}
