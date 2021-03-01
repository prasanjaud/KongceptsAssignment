import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Books } from '../classes/books';

@Injectable()
export class ApiService
{

    books: Books[] = [];
    readonly baseURL = 'http://localhost:9000/books';

    constructor(private httpclient: HttpClient) {}

    getbooks(): Observable<any> {
        return this.httpclient.get(this.baseURL);
    }

    postBook(book : Books){
        
        return this.httpclient.post(this.baseURL, book);
    }
}