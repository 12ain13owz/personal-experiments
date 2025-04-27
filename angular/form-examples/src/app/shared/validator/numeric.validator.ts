import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function numericValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string | null
    if (!value) return null

    const isNumeric = /^\d+$/.test(value) // ตรวจสอบว่าเป็นตัวเลขเท่านั้น
    return isNumeric ? null : { numeric: true }
  }
}
