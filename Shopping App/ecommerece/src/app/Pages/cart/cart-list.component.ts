import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  private count:number = 0;
  private isOpen:boolean =false;
  private previewFlag:boolean = false;
  private inVoiceNo! :number;
  constructor(private cartService:CartService) { 

  }

  ngOnInit() {

    this.cartService.cartUpdates$.subscribe(()=>{
      this.count= this.cartService.count;
    });
  }
  
 
  


}
