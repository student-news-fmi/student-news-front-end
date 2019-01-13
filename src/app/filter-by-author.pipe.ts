import { Pipe, PipeTransform } from '@angular/core';
import { News } from './news';

@Pipe({
  name: 'filterByAuthor'
})
export class FilterByAuthorPipe implements PipeTransform {

  transform(news: News[], author: string): any {
    if (!news){
      return null;
    }

    if(!author || author === 'All'){
      return news;
    }

    return news.filter(item => item.author === author);
  }

}
