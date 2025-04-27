import { Component, input } from "@angular/core"
import { FormControl, ReactiveFormsModule } from "@angular/forms"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"

@Component({
  selector: "app-form-textarea",
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: "./form-textarea.component.html",
  styleUrl: "./form-textarea.component.scss",
})
export class FormTextareaComponent {
  label = input("")
  placeholder = input("")
  rows = input("3")
  errorMessage = input<Record<string, unknown>>({})
  control = input.required<FormControl<string | null>>()
}
