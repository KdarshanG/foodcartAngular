import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {

  constructor(private commonService:CommonService) { }
  itemLists:any;
  ngOnInit(): void {
      this.commonService.getAllItems().subscribe((resp)=>{
          this.itemLists = resp;
          
      })
  }

}
