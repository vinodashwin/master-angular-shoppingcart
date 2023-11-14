import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/service/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cartCount : number = 0;

  constructor( private cartService: CartapiService ) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data:any)=> {
      this.cartCount = data.length;
    })
  }

  homepage() {
    window.location.href = "/"
  }
}
