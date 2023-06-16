import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PrdServicesService } from '../../services/prd-services.service';
import { Product } from 'src/app/_Models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  prd: Product[] =[];
  categoryId:number = 0;
  categoryList: any[] =[];
  cartList: any[] = [];
  loading=false;
  constructor(public prdService: PrdServicesService) {
    
    
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.prd = this.prd.filter(item => item.catId == this.categoryId)
  //   console.log("on change");
    
  // }
  ngOnInit(): void { 
    this.loading=true;   
    this.getAll();

    this.prdService.getAllCategories().subscribe((data:any) => {      
      this.categoryList =data;
      this.loading=false; 
    })
  }

  getAll(){
    this.prdService.getAll().subscribe((a:any) =>
    {
      this.loading=false;
      this.prd =a;
    } 
    );

  }
  onOptionsSelected(id:any){
    this.loading=true; 
    if(id == "all"){
      this.getAll();
    }
    else{
      this.prdService.getProductByCatId(id).subscribe((data:any) => {
        this.prd= data;
        this.loading=false; 
      }) 
    }
     
  }
  addToCart(prd:any){
    console.log(prd);
    if ("cart" in localStorage){
      this.cartList= JSON.parse(localStorage.getItem("cart")!) 
      let exist = this.cartList.find(item => item.item.id == prd.item.id)
       if(exist){
        alert("this product already in cart")
       }
       else{
        this.cartList.push(prd);
        localStorage.setItem("cart", JSON.stringify(this.cartList));
       }
      
    }
    else{
      this.cartList.push(prd);
      localStorage.setItem("cart", JSON.stringify(this.cartList));
    }

  }

}
