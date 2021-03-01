import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor(private router:Router){}

  handelBooklist(){
    this.router.navigate(['booklist'])
  }

  handelAddBook(){
    this.router.navigate(['addbook'])
  }

  Home(){
    this.router.navigate(['/'])
  }

}
