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
}
