import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ITecnologies } from './interfaces/tecnologies.interface';
import { tecnologies } from 'src/data/tecnologies'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {


  listTecnologies: Array<ITecnologies> = []
  constructor(private router: Router, private storage: Storage) { 
    this.listTecnologies = tecnologies;
  }

  ngOnInit() {
  }

  close() {
    console.log("estoy tratando de cerrar");
    this.storage.set("introShow", true);
    this.router.navigateByUrl("/menu/home");
  }

}
