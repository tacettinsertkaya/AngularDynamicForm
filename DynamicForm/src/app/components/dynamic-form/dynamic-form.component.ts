import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBase } from 'src/app/forms/form-base.input';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  @Input() formFields: FormInputBase<string | boolean>[] | null = [];

  form: any;

  ngOnInit(): void {
    this.toFormGroup();
  }

  // Returns whether the form exists and has been modified or not as a helper for the confirmation dialog
  hasFormUnsavedChanges(): boolean {
    return this.form && this.form.dirty;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    let data=Object.assign({},this.form.value);
    this.submitForm.emit(data);
  }

  private toFormGroup(): void {
    const group:any = {};

    this.formFields?.forEach((field:any) => {
      group[field.key] = field.required
        ? new FormControl(field.value || '', [
            ...field.validators,
            Validators.required,
          ])
        : new FormControl(field.value || '', field.validators);
    });
    this.form = new FormGroup(group);
  }
}
