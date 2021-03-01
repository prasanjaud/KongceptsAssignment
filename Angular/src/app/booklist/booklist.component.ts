import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService';

import { Books } from '../classes/books';
import { AddbookComponent } from '../addbook/addbook.component';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  router: any;

  constructor(private _ApiService: ApiService) { }

  listbooks: Books[] = [];

  ngOnInit() {
    this._ApiService.getbooks()
    .subscribe
    (
      data =>
      {
        this.listbooks = data;
        console.log(data);
      }
    );
  }

  

}
