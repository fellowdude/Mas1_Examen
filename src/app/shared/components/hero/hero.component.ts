import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
