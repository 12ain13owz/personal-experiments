import { AsyncPipe } from "@angular/common"
import { Component, input, OnInit } from "@angular/core"
import { FormControl, ReactiveFormsModule } from "@angular/forms"
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { map, Observable, startWith } from "rxjs"

@Component({
  selector: "app-form-autocomplete",
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
  templateUrl: "./form-autocomplete.component.html",
  styleUrl: "./form-autocomplete.component.scss",
})
export class FormAutocompleteComponent implements OnInit {
  label = input("")
  placeholder = input("")
  options = input<string[]>([])
  control = input.required<FormControl<string | null>>()

  filteredOptions!: Observable<string[]>

  ngOnInit(): void {
    this.filteredOptions = this.control().valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value!))
    )
  }

  private _filter(value: string): string[] {
    if (!value) return this.options()

    const filterValue = value.toLowerCase()
    return this.options().filter((option) =>
      option.toLowerCase().includes(filterValue)
    )
  }
}
