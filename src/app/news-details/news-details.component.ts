import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute, Params } from '@angular/router';
import { News } from '../news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news: News;
  id: number;
  constructor(private newsService: NewsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
    
        this.newsService.getNewsDetails(this.id)
          .subscribe(news => {
            this.news = news;
        });
      });
      }
}
