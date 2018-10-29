import { Component, OnInit } from '@angular/core';
import { ChuckService } from "./chuck.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck';
  public categories;

  constructor(private _chuckService: ChuckService, private http: HttpClient) {}

  

  getCategories() {
    this._chuckService.getCategories().subscribe(
      data => {
        this.categories = data;
        console.log(data);
      },
      err => console.error(err),
      () => console.log("done loading categories")
    );
  }

  ngOnInit(): void {
    /*
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
    */

    this.getCategories();
  }


}
