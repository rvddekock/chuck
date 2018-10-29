import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";




@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http: HttpClient) {}
  // Get chuck API
  getCategories() {
    return this.http.get("https://api.chucknorris.io/jokes/categories");
  }
}

