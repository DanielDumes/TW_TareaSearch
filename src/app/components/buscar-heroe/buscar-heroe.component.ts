import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroes } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css']
})
export class BuscarHeroeComponent implements OnInit {
  heroes: Heroes[]=[];
  InputText:string="";

  verHeroe(idx:number){
    console.log(idx);
    this._router.navigate(['/heroe',idx])
  }
  
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _heroServices:HeroesService,
    private _router:Router,
  ) {  }
   
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params =>{
      this.InputText = params["term"];
      this.heroes = this._heroServices.encontrarHeroe(this.InputText);
    })
    console.log(this.heroes);
    }
  
  }
  