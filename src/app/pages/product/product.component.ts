import { Component, OnInit } from '@angular/core';
import {HttpClient as HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private httpClient: HttpClient) {};


  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }

  getProduct(){
    const url ="https://api.escuelajs.co/api/v1/products/20";
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }

  createProduct(){
    const data = {
      title:"Zapatos",
      price:20,
      description:"deportivos / Henry Tito",
      images:["https://sdfsdgsdhasjh"],
      categoryId:1
    }
    const url = "https://i.pinimg.com/originals/15/c5/69/15c56972ae4fbb6b394a6e6efced477b.jpg";
    this.httpClient.post(url, data).subscribe(
      response => {console.log(response);
      }
    );
  }

  updateProduct(){
    const data = {
      title:"camisas",
      price:25,
      description:"ropa deportiva / Henry Tito",
      images:["https://https://i.pinimg.com/originals/15/c5/69/15c56972ae4fbb6b394a6e6efced477b.jpg"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/208";
    this.httpClient.put(url, data).subscribe(
      response => {console.log(response);
      }
    );
  }

  deleteProduct(){
    const url = "https://api.escuelajs.co/api/v1/products/208";
    this.httpClient.delete(url).subscribe(
      response => {console.log(response);
      }
    );
  }

  ngOnInit(): void{
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    this.deleteProduct();
  }

}
