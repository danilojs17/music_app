import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { IAuth } from '../login/interfaces/auth.interface';
import { IRegisterUser } from '../register/interfaces/register.interface';
import { IUser } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials: IAuth): Promise<string> {
    return new Promise((accept, reject) => {
      if (
        credentials.email === "danilo@pca.com" && 
        credentials.password === "123456789"
      )
      {
        accept(`Hola ${credentials.email}, bienvenido`)
      } else {
        reject("Email o contraseña incorrecta, Verifique sus credenciales")
      }
    })
  }

  registerUser(userData:IRegisterUser){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
