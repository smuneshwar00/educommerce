import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockProjectService {

  _http = inject(HttpClient)

  constructor() { }

  getProjects(){
    return this._http.get("/projects");
}
}
