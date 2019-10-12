import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  productsInCart = [];
  ngOnInit() {
    this.productsInCart = this.cartService.getItems();
  }
}
