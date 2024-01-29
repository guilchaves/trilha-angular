import { Injectable } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class ValidarCamposService {
  constructor() {}

  hasErrorValidate(control: AbstractControl, errorName: string): boolean {
    //verifica erro de validacao quando o control foi tocado ou sujado pelo usuario
    if ((control.dirty || control.touched) && this.hasError(control, errorName)) {
      return true
    }
    return false
  }

  hasError(control: AbstractControl, errorName: string): boolean {
    //verifica erro de validacao
    return control.hasError(errorName)
  }

  lengthValidator(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName]
    return error.requiredLength || error.min || error.max || 0
  }
}
