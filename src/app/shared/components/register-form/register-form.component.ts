import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TFavorite } from '../../types/favorite.type';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, NgxCaptchaModule, NgMultiSelectDropDownModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  favoriteList: Array<TFavorite> = [
    {
      fav_id: 1,
      fav_text: 'Pollo'
    },
    {
      fav_id: 2,
      fav_text: 'Cerdo'
    },
    {
      fav_id: 3,
      fav_text: 'Embutidos'
    },
    {
      fav_id: 4,
      fav_text: 'Verduras'
    },
    {
      fav_id: 5,
      fav_text: 'Frutas'
    }
  ];

  dropdownSettings = {
    "singleSelection": false,
    "defaultOpen": false,
    "idField": "fav_id",
    "textField": "fav_text",
    "selectAllText": "Select All",
    "unSelectAllText": "UnSelect All",
    "enableCheckAll": false,
    "itemsShowLimit": 3,
    "allowSearchFilter": false,
    "limitSelection": -1
  };
}
