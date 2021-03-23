import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  _url = "http://localhost:3000/itemList";
  
  constructor(private _http:HttpClient) { }


  getAllItems(){
    return this._http.get(this._url);
  }

  getOneItem(id){
    return this._http.get('http://localhost:3000/itemList/'+id);
  }

}
