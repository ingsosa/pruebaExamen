import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jsonPlaceholder } from '../models/jsonPlaceholder';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {}

  getJson(): Observable<jsonPlaceholder[]>
  {
    return this.http.get<jsonPlaceholder[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getJsonById(id: number): Observable<jsonPlaceholder>
  {
    return this.http.get<jsonPlaceholder>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
