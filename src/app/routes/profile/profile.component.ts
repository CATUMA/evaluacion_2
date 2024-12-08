import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Router } from '@angular/router';
import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-profile',
  imports: [MaterialModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  usuario: string | null = '';

  constructor(private routesService: RoutesService, private router: Router) {
    this.usuario = sessionStorage.getItem('usuario'); 
  }

  logout(): void {
    sessionStorage.removeItem('usuario'); 
    this.routesService.logout();
    this.router.navigate(['/login']); 
  }
}

