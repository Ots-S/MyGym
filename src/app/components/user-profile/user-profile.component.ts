import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(private http: HttpClient) {}

  user: any;

  ngOnInit(): void {
    this.http
      .get<any>('https://randomuser.me/api/')
      .subscribe((data) => (this.user = data.results[0]));
  }
}
