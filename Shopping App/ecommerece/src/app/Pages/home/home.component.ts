import { Component,OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { Data } from './../Json-items';
import { CartService } from './../services/cart.service';
import { product } from '../services/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public selectedCatList!:any[];

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
   
    this.selectedCatList = this.productService.getAll();
  }

 addToCart(product:product): void {
    this.cartService.add(product);
    console.log(this.cartService.cartItmes);
  }
}



