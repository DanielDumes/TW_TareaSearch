import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-aux',
  templateUrl: './heroe-aux.component.html',
  styleUrls: ['./heroe-aux.component.css']
})
export class HeroeAuxComponent implements OnInit {

  heroe:any={};
  
  constructor(private _activatedRouter:ActivatedRoute, private _heroesServices:HeroesService) {    
    }
  ngOnInit(): void {
  }

}
