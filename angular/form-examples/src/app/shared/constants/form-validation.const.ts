export const PATTERN_PASSWORD =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

export const FORM_VALIDATION_MESSAGES = {
  avatar: {
    mimeType: "Invalid file type. Please upload a valid image (PNG or JPG).",
  },
  email: {
    required: "Email is required",
    email: "Email is not valid",
  },
  phone: {
    required: "Phone is required",
    numeric: "Phone must contain only numbers",
    minlength: "Phone must be 10 digits",
  },
  password: {
    required: "Password is required",
    pattern:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  },
  firstName: {
    required: "First name is required",
  },
  lastName: {
    required: "Last name is required",
  },
  birthDate: {
    required: "Date of birth is required",
  },
  age: {
    required: "Age is required",
  },
  gender: {
    required: "Gender is required",
  },
  addressLine1: {
    required: "Address line 1 is required",
  },
  subDistrict: {
    required: "Sub-district is required",
  },
  district: {
    required: "District is required",
  },
  province: {
    required: "Province is required",
  },
  zipCode: {
    required: "Postal code is required",
    numeric: "Zip code must contain only numbers",
    minlength: "Phone must be 5 digits",
  },
  favorites: {
    required: "At least one favorite is required",
  },
}
