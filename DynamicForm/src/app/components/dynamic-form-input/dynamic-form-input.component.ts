import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputBase } from 'src/app/forms/form-base.input';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss']
})
export class DynamicFormInputComponent implements OnInit {

  @Input() field!: FormInputBase<string | boolean>;
  @Input() form: any;

  hasFieldError(): boolean {
    return (
      this.form.get(this.field.key).invalid &&
      (this.form.get(this.field.key).dirty ||
        this.form.get(this.field.key).touched)
    );
  }

  ngOnInit(): void {
  
  }


}
