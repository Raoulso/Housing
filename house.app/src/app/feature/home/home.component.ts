import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../sheared/shared.module';
import {  Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SharedModule]
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goToLogin(){
    console.log('log')
    this.router.navigate(['/login'])
  }
}
