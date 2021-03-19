import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  product_id: string;

  constructor(private actRoute: ActivatedRoute) {
    this.product_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
