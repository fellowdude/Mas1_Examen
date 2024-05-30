import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { DiscountDaysSectionComponent } from './discount-days-section/discount-days-section.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, DiscountDaysSectionComponent, CategoriesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
