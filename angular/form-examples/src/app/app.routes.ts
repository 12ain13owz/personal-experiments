import { Routes } from "@angular/router"

import { FormsModuleComponent } from "./pages/forms-module/forms-module.component"
import { ReactiveFormsComponent } from "./pages/reactive-forms/reactive-forms.component"

export const routes: Routes = [
  { path: "", redirectTo: "forms-module", pathMatch: "full" },
  { path: "forms-module", component: FormsModuleComponent },
  { path: "reactive-forms", component: ReactiveFormsComponent },
  { path: "**", redirectTo: "forms-modules", pathMatch: "full" },
]
