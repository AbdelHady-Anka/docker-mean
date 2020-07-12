import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.getJobs()
  }
  title = "docker"
  getJobs() : Observable<any>{
    let r = this.http.get<any>('http://localhost:3000/jobs');

    r.subscribe(console.log);

    return r;
  }
}
