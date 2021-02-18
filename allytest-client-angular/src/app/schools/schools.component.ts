import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { School, SchoolService } from '../school.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  schools: School[];

    constructor(private schoolService: SchoolService,
                private oktaAuth: OktaAuthService) { }

    async ngOnInit() {
        await this.oktaAuth.getAccessToken();
        this.getSchools();
    }

    getSchools() {
        this.schoolService
            .getSchools()
            .subscribe(
              schools => {
                    this.schools = schools
                }
            );
    }

    findSchool(id): School {
        return this.schools.find(scbool => scbool.id === id);
    }

    appendSchool(school: School) {
        this.schools.push(school);
    }

    deleteSchool(id) {
        let school = this.findSchool(id)
        this.schoolService
            .deleteSchool(id)
            .subscribe(
                response => {
                    let index = this.schools.findIndex(school => school.id === id)
                    this.schools.splice(index, 1)
                }
            );
    }
}