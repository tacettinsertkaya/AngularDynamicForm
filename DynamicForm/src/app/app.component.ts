import { Component } from '@angular/core';
import { FormInputBase } from './forms/form-base.input';
import { FormCheckbox } from './forms/form-checkbox.input';
import { FormDropdown } from './forms/form-dropdown.input';
import { FormTextbox } from './forms/form-text.input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm: FormInputBase<string | boolean>[] = [
    new FormTextbox({
      key: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    }),

    new FormTextbox({
      key: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    }),

    new FormDropdown({
      key: 'animal',
      label: 'Favorite animal',
      options: [
        { key: 'cat', value: 'Cat' },
        { key: 'dog', value: 'Dog' },
      ],
    }),

    new FormCheckbox({
      key: 'readAgreement',
      label: 'Read agreement?',
      required: true,
    }),
  ];


  submitForm($event:any){
   console.log("submit-data",$event)
  }
  
}
