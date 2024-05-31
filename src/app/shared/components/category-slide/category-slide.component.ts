import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-slide',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-slide.component.html',
  styleUrl: './category-slide.component.scss'
})
export class CategorySlideComponent implements OnInit{
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() buttonLabel: string = '';
  @Input() backgroundImage: string = '';
  @Input() link: string = '';
  @Input() maxDots: number = 0;
  @Input() dotPosition: number = 0;
  dotMarkers: Array<boolean> = [];

  ngOnInit(): void {
    this.dotMarkers = [];
    for(let i = 0; i < this.maxDots; i++){
      if(i === this.dotPosition){
        this.dotMarkers.push(true)
      }else{
        this.dotMarkers.push(false);
      }
    }
  }

}
