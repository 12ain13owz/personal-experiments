import { Component } from "@angular/core"
import { MatCardModule } from "@angular/material/card"
import { MatDividerModule } from "@angular/material/divider"
import { RouterOutlet } from "@angular/router"

import { HeaderComponent } from "./layouts/header/header.component"

@Component({
  selector: "app-root",
  imports: [RouterOutlet, MatCardModule, MatDividerModule, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Form Examples"
}
