import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { routes } from './launcher-routes'

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class LauncherModule {}
