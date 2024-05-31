import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SeparatorComponent } from '../../../shared/components/separator/separator.component';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { DiscountStepComponent } from '../../../shared/components/discount-step/discount-step.component';
import { TDiscountStep } from '../../../shared/types/discount-step.type';

@Component({
  selector: 'app-discount-days-section',
  standalone: true,
  imports: [CommonModule, SeparatorComponent, TitleComponent, DiscountStepComponent],
  templateUrl: './discount-days-section.component.html',
  styleUrl: './discount-days-section.component.scss'
})
export class DiscountDaysSectionComponent {
  discountStepList: Array<TDiscountStep> = [
    {
      step: 1,
      icon: 'registered',
      title: 'Regístrate',
      content: 'Completa el formulario con tus datos personales y acepta los términos.'
    },
    {
      step: 2,
      icon: 'discount_tag',
      title: 'Recibe un cupón',
      content: 'Recibirás un correo electrónico donde podrás ver el cupón de descuento.'
    },
    {
      step: 3,
      icon: 'smartphone',
      title: 'Empieza a ahorrar',
      content: '¡Y listo! Podrás usarlo del 28 al 30 de Marzo por compras en nuestra tienda online.'
    }
  ];
}
