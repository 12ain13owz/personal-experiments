import { FormArray, FormControl, FormGroup } from "@angular/forms"

export interface FullNameFormControl {
  firstName: FormControl<string>
  lastName: FormControl<string>
}

export interface AddressFormControl {
  addressLine1: FormControl<string>
  addressLine2: FormControl<string>
  subDistrict: FormControl<string>
  district: FormControl<string>
  province: FormControl<string>
  zipCode: FormControl<string>
}

export interface UserFormControl {
  email: FormControl<string>
  phone: FormControl<string>
  password: FormControl<string>
  fullName: FormGroup<FullNameFormControl>
  birthDate: FormControl<Date | null>
  gender: FormControl<string>
  address: FormGroup<AddressFormControl>
  favorites: FormArray<FormControl<string>>
}

export type UserFormValue = FormGroup<UserFormControl>["value"]
