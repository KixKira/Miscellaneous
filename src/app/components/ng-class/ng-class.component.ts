import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html'
})
export class NgClassComponent implements OnInit {

  alert: string = "alert-danger"
  property: any = {
    danger: false
  }
  loading: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    this.loading = true;
    setTimeout(()=> this.loading = false, 3000)
  }

}
