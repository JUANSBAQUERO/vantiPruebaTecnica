import { Component } from '@angular/core';
import { TableMainComponent } from "../../tables/table-main/table-main.component";

@Component({
    selector: 'app-card-table',
    standalone: true,
    templateUrl: './card-table.component.html',
    styleUrl: './card-table.component.scss',
    imports: [TableMainComponent]
})
export class CardTableComponent {

}
