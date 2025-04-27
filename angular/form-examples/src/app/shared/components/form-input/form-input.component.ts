import { Component, input, signal } from "@angular/core"
import { FormControl, ReactiveFormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"

import { ErrorFieldComponent } from "../error-field/error-field.component"

@Component({
  selector: "app-form-input",
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ErrorFieldComponent,
  ],
  templateUrl: "./form-input.component.html",
  styleUrl: "./form-input.component.scss",
})
export class FormInputComponent {
  type = input("text")
  label = input<string | number>("")
  placeholder = input("")
  minLenght = input("")
  maxLenght = input("")
  readonly = input(false)
  hint = input<string | null>(null)
  errorMessage = input<Record<string, unknown>>({})
  control = input.required<FormControl<string | null>>()

  protected hidePassword = signal(true)

  togglePasswordVisibility(): void {
    if (this.type() === "password") this.hidePassword.update((value) => !value)
  }
}
