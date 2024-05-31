import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SeparatorComponent } from '../../../shared/components/separator/separator.component';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { CategorySlideComponent } from '../../../shared/components/category-slide/category-slide.component';
import { TCategorySlide } from '../../../shared/types/category-slide.type';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CommonModule, SeparatorComponent, TitleComponent, CarouselModule, CategorySlideComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss'
})
export class CategoriesSectionComponent {
  @ViewChild('carousel') carousel?: CarouselComponent;
  categoryList: Array<TCategorySlide> = [
    {
      title: 'PHP',
      content: 'PHP es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML. echo "¡Hola, soy un script de PHP!"; ?>',
      buttonLabel: 'Ver categoría',
      backgroundImage: 'category_php',
      link: 'php',
    },
    {
      title: 'PYTHON',
      content: 'Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML).',
      buttonLabel: 'Ver categoría',
      backgroundImage: 'category_python',
      link: 'python',
    },
    {
      title: 'DISEÑO UX/UI',
      content: 'Aquí es donde entra la UX (experiencia de usuario) y la UI (interfaz de usuario), que tienen la función de que el usuario encuentre lo que busca en el menor tiempo posible y además tenga una buena experiencia al visitar la web.',
      buttonLabel: 'Ver categoría',
      backgroundImage: 'category_python',
      link: 'uxui',
    }
  ];
  carouselOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navText: ['', ''],
    items: 1,
    nav: false,
    navSpeed: 3000,
    margin: 0,
    autoWidth: true,
    autoplayHoverPause: true,
    responsiveRefreshRate: 0
  };
  showLeftArrow: boolean = false;
  showRightArrow: boolean = true;

  next(): void {
    this.carousel?.next();
  }

  prev(): void {
    this.carousel?.prev();
  }

  onCarouselTranslated($event: any): void{
    if($event.startPosition === this.categoryList.length - 1) {
      this.showLeftArrow = true;
      this.showRightArrow = false;
    }else{
      if($event.startPosition === 0) {
        this.showLeftArrow = false;
        this.showRightArrow = true;
      } else {
        this.showLeftArrow = true;
        this.showRightArrow = true;
      }
    }
  }
}
