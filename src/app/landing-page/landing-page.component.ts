import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  product_id:number;
  data:any;


  
  constructor(private actRoute: ActivatedRoute, private commonService:CommonService, private router:Router) { }

  ngOnInit(): void {
    let p_id = parseInt(this.actRoute.snapshot.params.id);
    this.product_id = p_id;
    this.getOneItem();
    // console.log(this.product_id);
  }

  getOneItem(){
    this.commonService.getOneItem(this.product_id).subscribe(resp=>{
      this.data =resp;
      // console.log(this.data);

    })
  }

  // product = {
  //   id : this.data.id,
  // }
  addToCart(newData){

    let data1 = {
      itemId : newData.id,
      name : newData.name,
      img :newData.imgpath[0],
      price : newData.price,
      type : newData.type,
      veg : newData.veg
    }
    console.log(data1);
    // let data1 = JSON.stringify(data);
    // console.log(data1);
    this.commonService.postDataToCart(data1);
    this.router.navigate(['/cart']);
  }
}
