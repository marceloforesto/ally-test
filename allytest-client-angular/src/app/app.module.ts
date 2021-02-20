import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { AppComponent } from './app.component';
import { SchoolsComponent } from './schools/schools.component';
import { CoursesComponent } from './courses/courses.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { CourseFormComponent } from './course-form/course-form.component';

const oktaConfig = {
  issuer: 'https://dev-93009660.okta.com',
  redirectUri: 'http://localhost:8080/implicit/callback',
  clientId: '0oa6obtcn0kD8GwMF5d6'
};

const routes: Routes = [
  { path: 'schools', component: SchoolsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent,
    CoursesComponent,
    SchoolFormComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(oktaConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
