import { Component, OnInit } from '@angular/core';

@Component({
  // # --> id selector
  selector: 'app-other',
  // templateUrl: './other.component.html',
  // inline template
  template: `<h2>
    other works!
  </h2>`,
  // styleUrls: ['./other.component.css']
  // inline style
  // encapsulation doesn't leaks or overrides the color with other component (It uses custom attribute)
  styles: [`
  h2{
  color: green;
  }`]
})
export class OtherComponent  {

  constructor() { }

}
