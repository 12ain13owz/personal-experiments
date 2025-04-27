import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"
import { FormsModule, NgForm } from "@angular/forms"
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatButtonModule } from "@angular/material/button"
import { provideNativeDateAdapter } from "@angular/material/core"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatRadioModule } from "@angular/material/radio"
import { filter, map, Subject } from "rxjs"

import { AREAS } from "../../shared/constants/areas.const"
import {
  FORM_VALIDATION_MESSAGES,
  PATTERN_PASSWORD,
} from "../../shared/constants/form-validation.const"
import { GENDER_OPTIONS } from "../../shared/constants/gender.const"
import { UserFormValue } from "../../shared/interfaces/user.interface"

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

@Component({
  selector: "app-forms-module",
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatAutocompleteModule,
  ],
  providers: [
    provideNativeDateAdapter(DATE_FORMATS),
    { provide: DATE_FORMATS, useValue: DATE_FORMATS },
  ],
  templateUrl: "./forms-module.component.html",
  styleUrl: "./forms-module.component.scss",
})
export class FormsModuleComponent {
  formModel: UserFormValue = {
    email: "",
    phone: "",
    password: "",
    fullName: { firstName: "", lastName: "" },
    birthDate: null,
    gender: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      subDistrict: "",
      district: "",
      province: "",
      zipCode: "",
    },
    favorites: [],
  }

  // ตัวแปรสำหรับ autocomplete area
  area = ""
  filteredAreas: string[] = AREAS

  // Constants
  validationMessages = FORM_VALIDATION_MESSAGES
  patternPassword = PATTERN_PASSWORD
  genderOptions = GENDER_OPTIONS
  areas = AREAS

  // Subject สำหรับจัดการ area changes
  private areaChangeSubject = new Subject<string | null>()

  constructor() {
    this.onSelectArea()
  }

  private onSelectArea(): void {
    this.areaChangeSubject
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
        this.formModel.address!.subDistrict = value.subDistrict
        this.formModel.address!.district = value.district
        this.formModel.address!.province = value.province
        this.formModel.address!.zipCode = value.zipCode
      })
  }

  // Trigger area change
  onAreaChange(value: string): void {
    this.areaChangeSubject.next(value)
    this.filterAreas(value)
  }

  // กรอง areas สำหรับ autocomplete
  filterAreas(value: string): void {
    const filterValue = value.toLowerCase()
    this.filteredAreas = this.areas.filter((area) =>
      area.toLowerCase().includes(filterValue)
    )
  }

  // เพิ่ม favorite
  addFavorite(value = ""): void {
    this.formModel.favorites!.push(value)
  }

  // ลบ favorite
  removeFavorite(index: number): void {
    this.formModel.favorites!.splice(index, 1)
  }

  // Reset form
  onReset(form: NgForm): void {
    this.formModel = {
      email: "",
      phone: "",
      password: "",
      fullName: { firstName: "", lastName: "" },
      birthDate: null,
      gender: "",
      address: {
        addressLine1: "",
        addressLine2: "",
        subDistrict: "",
        district: "",
        province: "",
        zipCode: "",
      },
      favorites: [],
    }
    this.area = ""
    this.filteredAreas = AREAS
    form.resetForm()
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return form.control.markAllAsTouched()

    const formValue: UserFormValue = form.control.getRawValue()
    console.log(formValue)
  }
}
