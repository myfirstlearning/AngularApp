import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  // selector: '.app-selector', --> Class selector
  // selector: 'app-selector', --> Element selector
  // tslint:disable-next-line:component-selector
  selector: '[app-selector]', // Attribute selector
  template: `
  <p>selector works!</p>
  <!--<p #sometemp>Hello...</p>
  <p (click)="handleClick()">{{sometemp.textContent}}</p>
  <p [attr.aria-label]="test"></p>-->
  `,
  styleUrls: []
})
export class SelectorComponent {

  test = 'hello';

  @ViewChild('sometemp')
  element: ElementRef;
}
