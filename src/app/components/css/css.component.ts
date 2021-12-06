import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
    In this CSS example, we have two paragraphs, one inside the component and one outside, directly in the HTML. In this case, the < p > tag is colored red and size 20px, since it is declared inside the component. And it does not affect globally.
    </p>
  `,
  styles: [`
    p{
      color: red;
      font-size: 20px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
