import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

export interface School {
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

export class SchoolService {

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

  addSchool(school): Observable<School> {
    return this.http.post(API_URL + '/api/schools', school,
        new RequestOptions({ headers: this.headers })
    ).map(res => res.json().data);
}

  getSchools(): Observable<School[]> {
      return this.http.get(API_URL + '/api/schools',
            new RequestOptions({ headers: this.headers })
        )
        .map(res => {
          let modifiedResult = res.json().data
                modifiedResult = modifiedResult.map(function(school) {
            return school;
          });
          return modifiedResult;
        });
  }
  deleteSchool(id): Observable<any> {
    return this.http.delete(API_URL + '/api/schools/' + id,
        new RequestOptions({ headers: this.headers })
    );
  }
}