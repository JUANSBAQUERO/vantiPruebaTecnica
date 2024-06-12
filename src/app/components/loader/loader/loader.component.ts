import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.5s')
      ])
    ])
  ]
})

export class LoaderComponent implements OnInit {
  loaderState: 'visible' | 'hidden' = 'visible';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.hideLoader();
    }, 2000);
  }

  hideLoader() {
    this.loaderState = 'hidden';
  }
}
