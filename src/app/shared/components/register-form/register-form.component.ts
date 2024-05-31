import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TFavorite } from '../../types/favorite.type';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, NgxCaptchaModule, NgMultiSelectDropDownModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  registerForm: FormGroup = new FormGroup({
    names: new FormControl(null, [Validators.required]),
    lastnames: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    favorites: new FormControl(null),
    recaptcha: new FormControl(null, [Validators.required]),
    terms: new FormControl(false, [Validators.requiredTrue]),
    dataUse: new FormControl(false, [Validators.requiredTrue]),
  });

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
