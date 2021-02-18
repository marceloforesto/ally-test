import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Course, CourseService } from '../course.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

    errors: string = '';

    constructor(private courseService: CourseService) { }

    @Output()
    courseAdded: EventEmitter<Course> = new EventEmitter<Course>();

    ngOnInit() {
    }

    addCourse(name, school, description, startDate) {
        this.courseService
            .addCourse({
                name: name,
                school: school,
                description: description,
                startDate: startDate
            })
            .subscribe(
                course => {
                    this.courseAdded.emit(course);
                },
                error => {
                    this.errors = error.json().errors;
                }
            );
    }
}