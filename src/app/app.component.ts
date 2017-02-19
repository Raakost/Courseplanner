import {Component} from '@angular/core';
import {Course} from './Course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Course Planner!';
  /*courses = ['Course 1', 'Course 2', 'Course 3'];*/
  courses: Course[];

  constructor() {
    this.courses = [{
      academy: 'EASV',
      year: 2017,
      title: 'Angular2',
      education: 'Computer Science',
      lecturer: 'Lars Bilde'
    },
      {
        academy: 'EASV',
        year: 2017,
        title: 'Mobile Apps',
        education: 'Computer Science',
        lecturer: 'Ole Eriksen'
      }];
  }
}
