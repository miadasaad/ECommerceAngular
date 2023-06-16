import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

@Input() data:any;
@Output() item = new EventEmitter();

quan:number = 0;
flag:boolean= true;

add(obj:any){
   this.item.emit({item:obj,quantity:this.quan});
   this.flag = true;
}

}
