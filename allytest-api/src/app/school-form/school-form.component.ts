import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { School, SchoolService } from '../school.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {

    errors: string = '';

    constructor(private schoolService: SchoolService) { }

    @Output()
    schoolAdded: EventEmitter<School> = new EventEmitter<School>();

    ngOnInit() {
    }

    addSchool(name, city) {
        this.schoolService
            .addSchool({
                name: name,
                city: city
            })
            .subscribe(
              school => {
                    this.schoolAdded.emit(school);
                },
                error => {
                    this.errors = error.json().errors;
                }
            );
    }
}