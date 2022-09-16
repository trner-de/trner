import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'trner-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fromapi = this.http.get(environment.backendUrl + '/api');

  constructor(private http: HttpClient) {}

  title = 'trner-de';
}
