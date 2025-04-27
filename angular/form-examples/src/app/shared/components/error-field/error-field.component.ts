import { Component, input } from "@angular/core"
import { AbstractControl, FormControl } from "@angular/forms"

import { ValidationPipe } from "../../pipes/validation.pipe"

@Component({
  selector: "app-error-field",
  imports: [ValidationPipe],
  templateUrl: "./error-field.component.html",
  styleUrl: "./error-field.component.scss",
})
export class ErrorFieldComponent {
  control = input<FormControl | AbstractControl>()
  errorMessage = input<Record<string, unknown>>()
}
