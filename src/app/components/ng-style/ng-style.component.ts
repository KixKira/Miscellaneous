import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <p>
  This ngStyle, resize the paragraph below. Tapping the buttons increases or decreases the size of the paragraph.
  </p>
    <p [style.fontSize.px]="tamano">
      Hello world... This is a tag
    </p>
    <button class="btn btn-success" (click)="tamano = tamano + 5">
      <i class="fas fa-plus"></i>
    </button>
    <button class="btn btn-danger" (click)="tamano = tamano - 5">
      <i class="fas fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
