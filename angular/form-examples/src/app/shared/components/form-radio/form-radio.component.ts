import { Component, input } from "@angular/core"
import { FormControl, ReactiveFormsModule } from "@angular/forms"
import { MatInputModule } from "@angular/material/input"
import { MatRadioModule } from "@angular/material/radio"

import { SelectOption } from "../../interfaces/generic.interface"
import { ErrorFieldComponent } from "../error-field/error-field.component"

@Component({
  selector: "app-form-radio",
  imports: [
    ReactiveFormsModule,

    MatInputModule,
    MatRadioModule,
    ErrorFieldComponent,
  ],
  templateUrl: "./form-radio.component.html",
  styleUrl: "./form-radio.component.scss",
})
export class FormRadioComponent {
  label = input("")
  options = input<SelectOption[]>([])
  errorMessage = input<Record<string, unknown>>({})
  control = input.required<FormControl<string>>()
}
