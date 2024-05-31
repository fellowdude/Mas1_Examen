import { Injectable } from '@angular/core';
import { DATA } from '../../../../../assets/data/category-data.data';
import { TCategoryContent } from '../../../types/category-content.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategory(id: string): TCategoryContent {
    const data: any = DATA;
    return data[id];
  }
}
