import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: News[] ;
  //  [
  //   {
  //     id: 0,
  //     title: 'title1',
  //     author: 'author1',
  //     creationDate: new Date(),
  //     paragraphs: [
  //       'paragraph1', 'paragraph2', 'paragraph3'
  //     ]
  //   },
  //   {
  //     id: 1,
  //     title: 'title2',
  //     author: 'author2',
  //     creationDate: new Date(),
  //     paragraphs: [
  //       'paragraph1', 'paragraph2', 'paragraph3'
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: 'title3',
  //     author: 'author3',
  //     creationDate: new Date(),
  //     paragraphs: [
  //       'paragraph1', 'paragraph2', 'paragraph3'
  //     ]
  //   }
  // ];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
       .subscribe(news => this.newsList = news);
  }
}
