import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { RoutesService } from './routes.service';

@Component({
  selector: 'app-routes',
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css'
})
export class RoutesComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private routesService: RoutesService
  ){

  }

  irOpcionHome(){
    this.router.navigate(["home"], {relativeTo: this.route})
  }

  irOpcionLogin(){
    this.router.navigate(["login"], {relativeTo: this.route})
  }

  irOpcionPerfil(){
    this.router.navigate(["profile"], {relativeTo: this.route})
  }
  logout(){
    this.routesService.logout()
    
  }



}
