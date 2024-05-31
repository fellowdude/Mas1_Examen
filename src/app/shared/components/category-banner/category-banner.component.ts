import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-banner.component.html',
  styleUrl: './category-banner.component.scss'
})
export class CategoryBannerComponent {
  @Input() backgroundImage: string = '';
  @Input() title: string = '';
}
