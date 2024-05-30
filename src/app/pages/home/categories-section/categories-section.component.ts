import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryBannerComponent } from '../../../shared/components/category-banner/category-banner.component';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CommonModule, CategoryBannerComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss'
})
export class CategoriesSectionComponent {

}
