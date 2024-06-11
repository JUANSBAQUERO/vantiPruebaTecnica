import { Component } from '@angular/core';
import { CardLoginComponent } from "../../../components/cards/card-login/card-login.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CardLoginComponent]
})
export class LoginComponent {

}
