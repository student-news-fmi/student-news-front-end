import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: object[] = [
    {
      title: 'title1',
      author: 'author1',
      creationDate: 'date1',
      paragraphs: [
        'paragraph1', 'paragraph2', 'paragraph3'
      ]
    },
    {
      title: 'title2',
      author: 'author2',
      creationDate: 'date2',
      paragraphs: [
        'paragraph1', 'paragraph2', 'paragraph3'
      ]
    },
    {
      title: 'title3',
      author: 'author3',
      creationDate: 'date3',
      paragraphs: [
        'paragraph1', 'paragraph2', 'paragraph3'
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
