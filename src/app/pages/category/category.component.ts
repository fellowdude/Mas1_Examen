import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryBannerComponent } from '../../shared/components/category-banner/category-banner.component';
import { SeparatorComponent } from '../../shared/components/separator/separator.component';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TCategoryDescription } from '../../shared/types/category-description.type';
import { TCategoryBanner } from '../../shared/types/category-banner.type';
import { CategoryService } from '../../shared/services/api/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, CategoryBannerComponent, SeparatorComponent, CarouselModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{

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

  categoryBannerInformation: TCategoryBanner = {
    title: '',
    backgroundImage: ''
  };
  imageList: Array<string> = [];
  descriptionList: Array<TCategoryDescription> = [];

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const name = this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params)
    const pageData = this.categoryService.getCategory(name);
    console.log(pageData);
    if(pageData) {
      this.categoryBannerInformation = pageData.banner;
      this.imageList = pageData.gallery;
      this.descriptionList = pageData.descriptionList;
    } else {
      this.router.navigate(['/']);
    }
  }

  next(): void {
    this.carousel?.next();
  }

  prev(): void {
    this.carousel?.prev();
  }
}
