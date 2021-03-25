import { Router } from '@angular/router';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})

export class CartPageComponent implements OnInit {
  data:any;
  totalAmount:number=0;
  totalLength:number;
  constructor(private cartService:CommonService, private route:Router) { }

  
  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    this.cartService.getAllCartItems().subscribe((resp)=>{
      this.data = resp;
    this.totalPrice();
    })
  };

  totalPrice(){
    console.log(this.data.length);
    length = this.data.length;
    this.totalLength = length;
    console.log(typeof this.data[0].price);
    
    for(let i=0;i<length;i++){
      this.totalAmount += this.data[i].price;
    }
    console.log(this.totalAmount)
  }

  

  deleteItem(cart){
    location.reload();
    this.cartService.deleteCartItem(cart).subscribe(()=>{
      
      this.getCartItems();
    })
  }
}
