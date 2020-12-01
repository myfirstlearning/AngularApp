import { Component } from '@angular/core';


// @Component -- Decorators/Annotations
@Component({
  // Attributes
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // {{title}} -- string interpolation
  // binds component properties to HTML5
  title = 'MyApp works !';
  name = 'Angular';
  version = 4;
  emp = {fName: 'Amruth', lName: 'Donthula', age: 27, active: true, description: 'Software Engineer'};
  img = 'http://lorempixel.com/200/223/people/';

  sayHello(): string {
    return 'Hello to data binding';
  }
}
