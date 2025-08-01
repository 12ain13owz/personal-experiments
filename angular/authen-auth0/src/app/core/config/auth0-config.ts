import { AuthConfig } from '@auth0/auth0-angular'

import { environment } from '../../../environments/environment'

export const auth0Config: AuthConfig = {
  domain: environment.auth0.domain,
  clientId: environment.auth0.clientId,
  authorizationParams: {
    redirect_uri: environment.auth0.redirectUri,
  },
}
