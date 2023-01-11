import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private httpClient: HttpClient) {};

  
  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }

  getProduct(){
    const url ="https://api.escuelajs.co/api/v1/products";
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }

  createProduct(){
    const url = "https://api.escuelajs.co/api/v1/products";
    this.httpClient.post(url, data).subscribe(
      response => {console.log(response);}
    );
  }

  ngOnInit(): void{
    //this.getProducts();
    this.getProduct();
  }

}
