import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SeparatorComponent } from '../../../shared/components/separator/separator.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CommonModule, SeparatorComponent, TitleComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss'
})
export class CategoriesSectionComponent {

}
