import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { RoutesService } from '../routes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private routesSevice: RoutesService,
    private router: Router
  ){

  }
  login(usuario: HTMLInputElement, 
    password: HTMLInputElement){
      this.routesSevice.login(usuario.value, 
        password.value)
      this.router.navigateByUrl("/routes")
    }
}
