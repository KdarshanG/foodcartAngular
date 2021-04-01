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
  itemList:any=[];
  filter:boolean=false;
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
      this.filter=true;
      console.log(this.selectedItems);
      let slen = this.selectedItems.length;
      let iLen = this.itemLists.length;
      let newItemList:any=[];
      for(let i=0;i<slen;i++){
       for(let j=0;j<iLen;j++){
          if(this.selectedItems[i] === this.itemLists[j].type){
            console.log(this.selectedItems[i] === this.itemLists[j].type);
            
          newItemList.push(this.itemLists[j]);
        }  
      }
      }
      this.itemList=newItemList;
      if(this.selectedItems.length==0){
        console.log(this.selectedItems==null);
        location.reload();
      }
 }



 
}
