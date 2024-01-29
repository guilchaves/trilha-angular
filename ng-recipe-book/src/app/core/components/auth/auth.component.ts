import { createNgModuleType } from '@angular/compiler/src/render3/r3_module_compiler'
import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs'
import { AuthResponseData, AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoginMode: boolean = true
  isLoading: boolean = false
  error: string = null

  constructor(private authService: AuthService) {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return
    }

    const email = form.value.email
    const password = form.value.password

    this.isLoading = true

    let authObs: Observable<AuthResponseData>

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password)
    } else {
      authObs = this.authService.signup(email, password)
    }

    authObs.subscribe(
      resData => {
        console.log(resData)
        this.isLoading = false
      },
      errorMessage => {
        console.log(errorMessage)
        this.error = errorMessage
        this.isLoading = false
      }
    )

    form.reset()
  }
}
