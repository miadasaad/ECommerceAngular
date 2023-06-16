import { Component, OnInit } from '@angular/core';
import { PrdServicesService } from '../../services/prd-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/_Models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prd:any;
constructor(public prdSer: PrdServicesService, public actRoute: ActivatedRoute) {
  
  
}
  ngOnInit(): void {

     this.actRoute.params.subscribe(data => {
      this.prdSer.getProductById(data["id"]).subscribe((prd:any) => {
         this.prd = prd;
      })
     })
  }
 
}
