import { Component, input } from "@angular/core"
import { FormControl, ReactiveFormsModule } from "@angular/forms"
import { provideNativeDateAdapter } from "@angular/material/core"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"

import { ErrorFieldComponent } from "../error-field/error-field.component"

const DATE_FORMATS = {
  parse: {
    dateInput: "dd/MM/yyyy",
  },
  display: {
    dateInput: "dd/MM/yyyy",
    monthYearLabel: "MMM yyyy",
    dateA11yLabel: "dd/MM/yyyy",
    monthYearA11yLabel: "MMMM yyyy",
  },
}

type StartView = "month" | "year" | "multi-year"

@Component({
  selector: "app-form-date",
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    ErrorFieldComponent,
  ],
  providers: [
    provideNativeDateAdapter(DATE_FORMATS),
    { provide: DATE_FORMATS, useValue: DATE_FORMATS },
  ],
  templateUrl: "./form-date.component.html",
  styleUrl: "./form-date.component.scss",
})
export class FormDateComponent {
  label = input("")
  startView = input<StartView>("month")
  errorMessage = input<Record<string, unknown>>({})
  control = input.required<FormControl<Date | null>>()
}
