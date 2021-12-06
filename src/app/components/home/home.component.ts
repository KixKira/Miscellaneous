import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h3>ngStyle</h3>
    <br>
    <app-ng-style></app-ng-style>
    <hr>
    <h3>CSS in only one component</h3>
    <br>
    <app-css></app-css>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto est, animi accusamus autem quidem, rem perferendis iste amet quam tempora qui labore doloribus natus consectetur ut eius perspiciatis distinctio necessitatibus.
    </p>
    <hr>
    <h3>ngClass</h3>
    <br>
    <app-ng-class></app-ng-class>
    <hr>
    <h3>Custom Policies</h3>
    <br>
    <p>
      For this example, we create a directive, which works by hovering the mouse over the text and it colors the entire background red. The chosen color is declared in two parts. First in the directive, it is indicated that at the time of passing, it will be of a specific color. If we want that color, in the body, inside the < p > tag, we leave the call blank. If we want another color, we declare it on the label.
    </p>
    <p [appHighlighted]="'red'">
        This is highlighted text.
    </p>
    <hr>
    <h3>ngSwitch</h3>
    <br>
    <app-ng-switch></app-ng-switch>
    <hr>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
