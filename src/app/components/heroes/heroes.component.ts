import { Component, OnInit } from '@angular/core';
import { Heroes, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroes[]=[];

   verHeroe(idx: number){
    console.log(idx)
    this.router.navigate(['/heroe',idx])
   }
  constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {
    this.heroes=this._heroesService.getHeroes();

    console.log(this.heroes)
  }
}
