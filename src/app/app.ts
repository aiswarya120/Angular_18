import { Component } from '@angular/core';

import { CoursesComponent } from './courses/courses.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoursesComponent], // ✅ Add here
  templateUrl: './app.html'
})
export class AppComponent {}
