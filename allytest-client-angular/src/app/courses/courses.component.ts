import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Course, CourseService } from '../course.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];

    constructor(private courseService: CourseService,
                private oktaAuth: OktaAuthService) { }

    async ngOnInit() {
        await this.oktaAuth.getAccessToken();
        this.getCourses();
    }

    getCourses() {
        this.courseService
            .getCourses()
            .subscribe(
                courses => {
                    this.courses = courses
                }
            );
    }

    findCourse(id): Course {
        return this.courses.find(course => course.id === id);
    }

    appendCourse(course: Course) {
        this.courses.push(course);
    }

    deleteCourse(id) {
        let course = this.findCourse(id)
        this.courseService
            .deleteCourse(id)
            .subscribe(
                response => {
                    let index = this.courses.findIndex(course => course.id === id)
                    this.courses.splice(index, 1)
                },
            );
    }
}