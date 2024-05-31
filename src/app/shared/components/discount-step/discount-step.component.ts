import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discount-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discount-step.component.html',
  styleUrl: './discount-step.component.scss'
})
export class DiscountStepComponent {
  @Input() step: number = 0;
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
}
