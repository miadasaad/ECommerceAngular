import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, filter, toArray } from 'rxjs';
import { Product } from 'src/app/_Models/product';

@Injectable({
  providedIn: 'root'
})
export class PrdServicesService {

  baseUrl = "https://localhost:7189/api/Products/";
  constructor(public http: HttpClient) { 

  }
  getAll(){
   return this.http.get(this.baseUrl)
          .pipe(catchError(err => {
            console.log(err);
            
            throw 'error in source. Details: ' + err;

          }));  
  }
  getProductByCatId(catId:number){

    return this.http.get(this.baseUrl+"category/"+catId).pipe(
      catchError(err => {
        console.log(err);
        
        throw 'error in source. Details: ' + err;

      })
    )
  }
  getProductById(id:number){

    return this.http.get(this.baseUrl+id).pipe(
      catchError(err => {
        console.log(err);
        
        throw 'error in source. Details: ' + err;

      })
    )
  }
  getAllCategories(){
    return this.http.get("https://localhost:7189/api/Categories/")
          .pipe(catchError(err => {
            console.log(err);
            
            throw 'error in source. Details: ' + err;

          })); 
  }
}









