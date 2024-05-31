import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SeparatorComponent } from '../../../shared/components/separator/separator.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-discount-days-section',
  standalone: true,
  imports: [CommonModule, SeparatorComponent, TitleComponent],
  templateUrl: './discount-days-section.component.html',
  styleUrl: './discount-days-section.component.scss'
})
export class DiscountDaysSectionComponent {

}
