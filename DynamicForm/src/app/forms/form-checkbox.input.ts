import { FormInputBase } from "./form-base.input";

export class FormCheckbox extends FormInputBase<string> {
  override controlType = 'checkbox';
}
