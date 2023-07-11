import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  EncontrarHeoroe(Inputvalue: String){
    console.log(Inputvalue);
    if(Inputvalue){
  this.router.navigate(['/buscar',Inputvalue]);
    }else{
      this.router.navigate(['/heroes']);
    }
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
