import { Component } from '@angular/core';
import { ChuckService } from "./chuck.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck';
  public categories;

  constructor(private _chuckService: ChuckService) {}

  ngOnInit() {
    this.getCategories();
  }

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
}
