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
  selectedItems:string[];

  ngOnInit(): void {
    this.getAllItem();
    this.selectedItems = new Array<string>();
  }


  getAllItem(){ 
    this.commonService.getAllItems().subscribe((resp)=>{
        this.itemLists = resp;
        
    })
  }

  gotoLandingPage(card){
        this.router.navigate(['/landingPage',card.id])
  }

 getAlbumId(e:any,type:string){
      if(e.target.checked){
        console.log(type + 'checked')
        this.selectedItems.push(type);
      }else{
        console.log(type + 'unchecked');
        this.selectedItems = this.selectedItems.filter(m=>m!=type);
      }
      // console.log("listingpage" + this.selectedItems);
      this.commonService.getFilter(this.selectedItems).subscribe((res)=>{
      // this.commonService.getFilter(this.selectedItems)
        this.itemLists = res;
        console.log(this.itemLists);
      })
 }

 

 
}
