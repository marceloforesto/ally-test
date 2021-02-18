import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

export interface Course {
    id: Number,
    name: String,
    school: String,
    description: String,
    startDate: Date
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private accessToken;
  private headers;

  constructor(private oktaAuth: OktaAuthService, private http: Http) {
      this.init();
  }

  async init() {
      this.accessToken = await this.oktaAuth.getAccessToken();
      this.headers = new Headers({
          Authorization: 'Bearer ' + this.accessToken
      });
  }

  addCourse(course): Observable<Course> {
    return this.http.post(API_URL + '/api/courses', course,
        new RequestOptions({ headers: this.headers })
    ).map(res => res.json().data);
  }

  getCourses(): Observable<Course[]> {
      return this.http.get(API_URL + '/api/courses',
            new RequestOptions({ headers: this.headers })
        )
        .map(res => {
          let modifiedResult = res.json().data
                modifiedResult = modifiedResult.map(function(course) {
            return course;
          });
          return modifiedResult;
        });
  }
  deleteCourse(id): Observable<any> {
    return this.http.delete(API_URL + '/api/courses/' + id,
        new RequestOptions({ headers: this.headers })
    );
}
}