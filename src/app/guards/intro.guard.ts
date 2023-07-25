import { Injectable } from '@angular/core';
import {  CanActivate,  } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate() {
    const isIntroShowed = await this.storage.get('introShow');
    if (isIntroShowed){
      return true;
    }else{
      this.router.navigateByUrl('/intro');
      return false;
    }
  }
}
