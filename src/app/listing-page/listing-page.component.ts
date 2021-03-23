import { getTestBed } from '@angular/core/testing';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {

  constructor(private commonService:CommonService, private router:Router) { }
  itemLists:any;
  ngOnInit(): void {
    this.getAllItem();
  }


  getAllItem(){
    this.commonService.getAllItems().subscribe((resp)=>{
        this.itemLists = resp;
    })
  }

  gotoLandingPage(card){
        this.router.navigate(['/landingPage',card.id])
  }
}
