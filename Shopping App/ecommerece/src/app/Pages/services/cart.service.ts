import { Injectable } from '@angular/core';
import { Data } from '../Json-items';
import { Subject }    from 'rxjs';


@Injectable({
    providedIn: 'root',
}

)
export class CartService {

  

  private cartUpdates = new Subject<any>();
  public cartUpdates$ = this.cartUpdates.asObservable();

  public cartItmes:any[] =[];
  public get count():number{
    return this.cartItmes.reduce((c,t1) => t1.qty+c,0);
    
  };
  

  constructor() { 

  }

  add(product:any){

   let item:any = this.cartItmes.find(item => item.id == product.id) ;

   if(item){ item.qty ++ } else {
     (product).qty = 1;
     this.cartItmes.push(product)
   }

   this.cartUpdates.next(this.count);
   //test
   
  }

}