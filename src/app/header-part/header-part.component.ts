import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-part',
  templateUrl: './header-part.component.html',
  styleUrls: ['./header-part.component.scss']
})
export class HeaderPartComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToCart(){
    this.route.navigate(['/cart'])
  }
}
