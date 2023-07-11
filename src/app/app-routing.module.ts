import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';


const routes: Routes = [

{path: 'home', component:HomeComponent },
{path: 'about', component:AboutComponent},
{path: 'heroes', component:HeroesComponent},
{path: 'heroe/:id', component:HeroeComponent},
{path:'buscar/:term',component:BuscarHeroeComponent},
{path: '**', pathMatch: 'full', redirectTo :'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
