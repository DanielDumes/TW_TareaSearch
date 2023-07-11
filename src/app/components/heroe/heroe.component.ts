import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any={};

  constructor(private activateRoute:ActivatedRoute, private _heroeServicio:HeroesService) {
    this.activateRoute.params.subscribe(params =>{
      this.heroe = _heroeServicio.getHeroe(params['id']);
      console.log(this.heroe);
 //   console.log(params['id']);
   })
  }
  ngOnInit(): void {
  }

}
