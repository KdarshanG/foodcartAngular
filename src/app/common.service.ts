import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  _url = "http://localhost:3000/itemList";
  _url1 = "http://localhost:3000/cart";

  
  constructor(private _http:HttpClient) { }

  

  getAllItems(){
    return this._http.get(this._url);
  }

  getOneItem(id){
    return this._http.get('http://localhost:3000/itemList/'+id);
  }


  getFilter(food:any){
    let foodList:any= food;
    console.log(foodList);
    let params = new HttpParams();
    params = params.append('type', foodList.join(', '));
    return this._http.get(this._url, {params:params});
  }


  postDataToCart(data){
    this._http.post(this._url1,data).subscribe();
    console.log(data);
  }

  getAllCartItems(){
    return this._http.get(this._url1);
  }

  deleteCartItem(cart){
    return this._http.delete(this._url1+"/"+cart.id)
  }
}
