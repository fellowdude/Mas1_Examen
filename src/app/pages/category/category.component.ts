import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { CategoryBannerComponent } from '../../shared/components/category-banner/category-banner.component';
import { SeparatorComponent } from '../../shared/components/separator/separator.component';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TCategoryDescription } from '../../shared/types/category-description.type';
import { TCategoryBanner } from '../../shared/types/category-banner.type';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, CategoryBannerComponent, SeparatorComponent, CarouselModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryBannerInformation: TCategoryBanner = {
    title: 'PHP',
    backgroundImage: 'php_banner'
  };

  imageList: Array<string> = [
    'php_album_1',
    'python_album_1',
    'uxui_album_1',
  ];

  descriptionList: Array<TCategoryDescription> = [
    {
      title: '¿Qué es PHP y cómo funciona?',
      contentHTML: `
        <p>
          PHP es un lenguaje de programación destinado a desarrollar aplicaciones para la web y crear páginas web, favoreciendo la conexión entre los servidores y la interfaz de usuario.<br>
          Entre los factores que hicieron que PHP se volviera tan popular, se destaca el hecho de que es de código abierto.<br>
          Esto significa que cualquiera puede hacer cambios en su estructura. En la práctica, esto representa dos cosas importantes:<br>
        </p>
        <ol>
          <li>
            Es de código abierto, no hay restricciones de uso vinculadas a los derechos. El usuario puede usar PHP para programar en cualquier proyecto y comercializarlo sin problemas.
          </li>
          <li>
            Está en constante perfeccionamiento, gracias a una comunidad de desarrolladores proactiva y comprometida.
          </li>
        </ol>
      `
    },
    {
      title: 'La función principal de PHP, en la práctica',
      contentHTML: `
        <p>
          El PHP generalmente es definido como un lenguaje del lado del servidor. Esto significa que se aplica en la programación que tiene lugar en el servidor web responsable de ejecutar la aplicación o, más a menudo, en un sitio web.
        </p>
        <p>
          Este trabajo previo permite cargar los elementos de una página antes de mostrarlos al usuario que accede a un sitio web, por ejemplo.
        </p>
        <p>
          El código PHP se ejecuta en el servidor que, al leer los comandos, puede activar todos los elementos funcionales y la interfaz visual del sitio web.
        </p>
        <p>
          Quizás, la aplicación principal del lenguaje PHP, cuando hablamos de la web, es estructurar sitios web en WordPress.
        </p>
        <p>
          La simplicidad para aprender a usarlo y el desarrollo del código abierto le facilita el trabajo a los profesionales que eligen estructurar sitios web utilizando la plataforma, pues a medida que avanzan las configuraciones y ediciones se simplifican aún más.
        </p>
      `
    },
  ];

  @ViewChild('carousel') carousel?: CarouselComponent;
  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navText: ['', ''],
    items: 1,
    nav: false,
    navSpeed: 3000,
    margin: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    autoWidth: true,
    autoplayHoverPause: true,
    responsiveRefreshRate: 0
  };

  next(): void {
    this.carousel?.next();
  }

  prev(): void {
    this.carousel?.prev();
  }
}
