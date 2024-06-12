import { Component } from '@angular/core';
import { CardTableComponent } from "../../../components/cards/card-table/card-table.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [CardTableComponent]
})
export class DashboardComponent {

}
