import { Component, OnInit, ViewChild } from '@angular/core';
import { News } from '../news';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: News[];
  authors: string[];
  selectedAuthor: string;
  sortCriteria: string;
  selectedOrder: string;

  constructor(private newsService: NewsService) { 
    this.selectedAuthor = 'All';
    this.sortCriteria = 'Date';
    this.selectedOrder = 'Ascending';
  }

  ngOnInit() {
    this.newsService.getNews()
       .subscribe(news => {
         this.newsList = news;
         this.authors = Array.from(new Set(news.map((item: any) => item.author)));
       });
  }
}
