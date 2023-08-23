import { Injectable } from '@angular/core';
import {Data} from './../Json-items';
//import { product } from './product';


@Injectable({
    providedIn: 'root',
}
)
export class ProductService {

  constructor() { }

  getAll():product[] {
    return Data;
  }

  getCategoryItems(name:string): product[] {
    return Data.filter(item => item.name == name );
  }

}
export interface product {
    id:string;
    name:string;
    cost:string;
    availablity:string;
    details?:string;
    category?:string;
}