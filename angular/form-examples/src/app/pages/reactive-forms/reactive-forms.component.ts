import { Component, inject, viewChild } from "@angular/core"
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { filter, map } from "rxjs"

import { FormAutocompleteComponent } from "../../shared/components/form-autocomplete/form-autocomplete.component"
import { FormInputComponent } from "../../shared/components/form-input/form-input.component"
import { FormRadioComponent } from "../../shared/components/form-radio/form-radio.component"
import { FormTextareaComponent } from "../../shared/components/form-textarea/form-textarea.component"
import { AREAS } from "../../shared/constants/areas.const"
import {
  FORM_VALIDATION_MESSAGES,
  PATTERN_PASSWORD,
} from "../../shared/constants/form-validation.const"
import { GENDER_OPTIONS } from "../../shared/constants/gender.const"
import {
  UserFormControl,
  UserFormValue,
} from "../../shared/interfaces/user.interface"
import { numericValidator } from "../../shared/validator/numeric.validator"
import { FormDateComponent } from "./../../shared/components/form-date/form-date.component"

@Component({
  selector: "app-reactive-forms",
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormInputComponent,
    FormDateComponent,
    FormRadioComponent,
    FormTextareaComponent,
    FormAutocompleteComponent,
  ],
  providers: [FormGroupDirective],
  templateUrl: "./reactive-forms.component.html",
  styleUrl: "./reactive-forms.component.scss",
})
export class ReactiveFormsComponent {
  private fb = inject(FormBuilder)
  private formDirective = viewChild(FormGroupDirective)

  form: FormGroup<UserFormControl>
  areaControl = new FormControl<string | null>("")

  validationMessages = FORM_VALIDATION_MESSAGES
  genderOptions = GENDER_OPTIONS
  areas = AREAS

  constructor() {
    this.form = this.inttForm()
    this.onSelectArea()
  }

  private inttForm(): FormGroup<UserFormControl> {
    return this.fb.nonNullable.group({
      email: ["", [Validators.required, Validators.email]],
      phone: [
        "",
        [Validators.required, numericValidator(), Validators.minLength(10)],
      ],
      password: [
        "",
        [Validators.required, Validators.pattern(PATTERN_PASSWORD)],
      ],
      fullName: this.fb.nonNullable.group({
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
      }),
      birthDate: [null as Date | null, [Validators.required]],
      gender: ["", [Validators.required]],
      address: this.fb.nonNullable.group({
        addressLine1: ["", [Validators.required]],
        addressLine2: [""],
        subDistrict: ["", [Validators.required]],
        district: ["", [Validators.required]],
        province: ["", [Validators.required]],
        zipCode: [
          "",
          [Validators.required, numericValidator(), Validators.minLength(5)],
        ],
      }),
      favorites: this.fb.array<FormControl<string>>([]),
    })
  }

  private onSelectArea(): void {
    this.areaControl.valueChanges
      .pipe(
        filter((value): value is string => !!value),
        map((value: string) => {
          const [subDistrict, district, province, zipCode] = value
            .split(",")
            .map((item) => item.trim())
          return { subDistrict, district, province, zipCode }
        }),
        takeUntilDestroyed()
      )
      .subscribe((value) => {
        this.form.patchValue({
          address: {
            subDistrict: value.subDistrict,
            district: value.district,
            province: value.province,
            zipCode: value.zipCode,
          },
        })
      })
  }

  control<K extends keyof UserFormControl>(controlName: K): UserFormControl[K] {
    return this.form.controls[controlName]
  }

  get favorites(): FormArray<FormControl<string>> {
    return this.form.controls.favorites
  }

  addFavorite(value = ""): void {
    const favoriteControl = this.fb.nonNullable.control(value)
    this.favorites.push(favoriteControl)
  }
  removeFavorite(index: number): void {
    this.favorites.removeAt(index)
  }

  onReset(): void {
    this.formDirective()?.resetForm()
    this.areaControl.reset()
  }

  onSubmit(): void {
    if (this.form.invalid) return this.form.markAllAsTouched()

    const formValue: UserFormValue = this.form.getRawValue()
    console.log(formValue)
  }
}
