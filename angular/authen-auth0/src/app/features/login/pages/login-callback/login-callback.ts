import { Component, inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@auth0/auth0-angular'
import { take } from 'rxjs'

@Component({
  selector: 'app-login-callback',
  imports: [],
  templateUrl: './login-callback.html',
  styleUrl: './login-callback.scss',
})
export class LoginCallback implements OnInit {
  private router = inject(Router)
  private authService = inject(AuthService)

  ngOnInit(): void {
    this.authService
      .handleRedirectCallback()
      .pipe(take(1))
      .subscribe(() => this.router.navigate(['/launcher']))
  }
}
