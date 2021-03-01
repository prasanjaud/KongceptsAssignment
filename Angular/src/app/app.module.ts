import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { RouterModule,Routes } from '@angular/router';
import { ApiService } from './services/apiService';
import { AddbookComponent } from './addbook/addbook.component';


  const myRoots: Routes = [
  ];

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot(myRoots)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
