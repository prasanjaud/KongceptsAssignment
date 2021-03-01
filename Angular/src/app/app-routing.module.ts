import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from '../app/booklist/booklist.component';
import { AddbookComponent } from '../app/addbook/addbook.component';

const routes: Routes = [
  { path: 'booklist', component: BooklistComponent},
  { path: 'addbook', component: AddbookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
