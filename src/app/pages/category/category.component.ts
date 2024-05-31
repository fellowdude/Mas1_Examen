import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryBannerComponent } from '../../shared/components/category-banner/category-banner.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, CategoryBannerComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

}
