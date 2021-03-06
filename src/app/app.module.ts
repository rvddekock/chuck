import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogDataDialog} from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DialogDataDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  entryComponents: [
    DialogDataDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
