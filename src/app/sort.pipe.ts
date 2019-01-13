import { Pipe, PipeTransform } from '@angular/core';
import { News } from './news';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(news: News[], sortCriteria: string, sortOrder: string): any {

    if (!news){
      return null;
    }

    sortCriteria = sortCriteria.toLowerCase();
    if (sortCriteria === 'date'){
      sortCriteria = 'creationDate';
    }

    sortOrder = sortOrder.toLowerCase();
    let order = 1;
    if (sortOrder === 'descending') {
      order = -1;
    }
    
    return news.sort((x, y) => {
      const result = x[sortCriteria].localeCompare(y[sortCriteria]);
      return result * order;
    });
  }
}
