import { Component, inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@auth0/auth0-angular'
import { take } from 'rxjs'

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  private router = inject(Router)
  private authService = inject(AuthService)

  ngOnInit(): void {
    this.authService.isAuthenticated$.pipe(take(1)).subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.authService.loginWithRedirect()
        return
      }

      this.router.navigate(['/launcher'])
    })
  }
}
