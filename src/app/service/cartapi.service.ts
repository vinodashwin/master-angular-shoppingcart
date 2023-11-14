import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartapiService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    const index = this.cartItemList.findIndex((item: any) => item.id === product.id);

    if (index !== -1) {
      // Item already in cart, update quantity
      this.cartItemList[index].quantity = product.quantity + 1;
      this.cartItemList[index].total = product.quantity * product.price;

    } else {
      // Item not in cart, add it
      this.cartItemList.push(product);
    }
    //this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();

    console.log(this.cartItemList)
  }

 

  getTotalPrice() {
    let grantTotal = 0;
    this.cartItemList.map((a: any) => {
      grantTotal = +a.total;
    })
    return grantTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  emptyCartItem() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }




}
