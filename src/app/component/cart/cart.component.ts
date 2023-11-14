import { Component, OnInit } from "@angular/core";
import { CartapiService } from "src/app/service/cartapi.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cartProduct: any = [];
  total:number = 0;
  constructor(private cartService: CartapiService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data: any) => {
      this.cartProduct = data;
    });
  }



  remove(product: any) {
    this.cartService.removeCartItem(product);
  }
}
