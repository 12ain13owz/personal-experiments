import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { routes } from './claim-routes'

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class ClaimModule {}
