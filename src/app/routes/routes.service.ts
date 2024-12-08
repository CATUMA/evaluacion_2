import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  login(usuario:string, password:string){
    if(usuario == "Catunta" && password == "123"){
      sessionStorage.setItem("login", "true")
    }
  }

  logout(){
    sessionStorage.clear()
  }

  isLogin(): boolean{
    return !!sessionStorage.getItem("login")
  }
}
