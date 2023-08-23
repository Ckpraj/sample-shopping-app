import { Component, OnInit } from '@angular/core';
import { CartService } from './Pages/services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerece';
  public count:number = 0
  constructor(private cartService: CartService){

  }
  ngOnInit(): void {
     this.cartService.cartUpdates$.subscribe({
      next:(data)=>{this.count = data}
     });
  }
}
