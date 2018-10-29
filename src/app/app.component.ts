import { Component, OnInit, Inject} from '@angular/core';
import { ChuckService } from "./chuck.service";
import { HttpClient } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck';
  public categories;
  public joke;

  constructor(private _chuckService: ChuckService, private http: HttpClient, public dialog: MatDialog) {}

  

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

  getJoke(cat) {
    this._chuckService.getJoke(cat).subscribe(
      data => {
        this.joke = data;
        console.log(data);
      },
      err => console.error(err),
      () => console.log("done loading joke")
    );
  }

  openDialog() {
    this.dialog.open(DialogDataDialog, {
      data: {
        animal: 'panda'
      }
    });
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


@Component({
  selector: 'dialog-data-dialog',
  templateUrl: 'dialog-data-dialog.html',
})
export class DialogDataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
