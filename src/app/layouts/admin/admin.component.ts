import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    imports: [RouterOutlet]
})
export class AdminComponent {
  constructor(
    private authService: AuthService
  ){}

  logout(){
    this.authService.logout();
  }
}
