import { FormInputBase } from "./form-base.input";

export class FormTextbox extends FormInputBase<string> {
    override controlType = 'textbox';
  }