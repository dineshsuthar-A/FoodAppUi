import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-manager',
  templateUrl: './nav-manager.component.html',
  styleUrls: ['./nav-manager.component.css']
})
export class NavManagerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 logout(): void{
    console.log('press');
    localStorage.removeItem("user");
    this.route.navigate(['/'])
  }

}
