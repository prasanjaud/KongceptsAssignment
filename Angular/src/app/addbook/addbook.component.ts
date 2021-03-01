import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/apiService';

declare var M: any;

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form?.reset();
  }

  onClickSubmit(form : NgForm){


    this.apiservice.postBook(form.value).subscribe((res) => {
      this.resetForm(form);
      M.toast({ html: 'Saved', classes: 'rounded'});
    },(error) => {
      console.log('Error is', error);
    })

    console.log(form.value); 
    console.log(form.valid);
  }

}
