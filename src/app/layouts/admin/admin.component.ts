import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader/loader-service';
import { LoaderComponent } from "../../components/loader/loader/loader.component";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    imports: [RouterOutlet, CommonModule, LoaderComponent]
})
export class AdminComponent {
  isDark: boolean = true;

  constructor(
    private authService: AuthService,
    private loaderService: LoaderService
  ){}

  isLoading: boolean = true;

  ngOnInit() {
    this.loaderService.loading$.subscribe((loading: boolean) => {
      setTimeout(() => {
        this.isLoading = loading;
      }, 3000);
    });
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-mode', newTheme === 'dark');
    document.body.classList.toggle('light-mode', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-mode');
  }

  logout(){
    this.authService.logout();
  }
}
