import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { News } from '../news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsUrl: string = 'http://localhost:8090/news'; 

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl);
  }
}
