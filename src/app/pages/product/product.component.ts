import { Component, OnInit } from '@angular/core';
import {HttpClient as HttpClient} from '@angular/common/http';
import { ProductHttpServiceService } from 'src/app/services/product-http-service.service';
import { ProductModel, UpdateProductDto } from 'src/app/entities/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products: ProductModel[] = [];
selectedProduct: UpdateProductDto = {title:'', price:0, description:''};
  constructor(private productHttpService: ProductHttpServiceService) {};

  initProduct(){
    this.selectedProduct = {title:'', price:0, description:''}
  }

  getProducts(){
    this.productHttpService.getAll().subscribe
    (response => {
      this.products=response;
      console.log(response);
    });
  }

  getProduct(){
    this.productHttpService.getOne(2).subscribe
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
    this.productHttpService.store(data).subscribe(
      response => {console.log(response);
      }
    );
  }

  updateProduct(id:ProductModel['id']){
    const data = {
      title:"camisas",
      price:25,
      description:"ropa deportiva / Henry Tito",
    }
    this.productHttpService.update(id, data).subscribe(
      response => {console.log(response);
      }
    );
  }

  editProduct(product:ProductModel){
    this.selectedProduct = product;
  }

  deleteProduct(id:ProductModel['id']) {
    this.productHttpService.destroy(id).subscribe(
      response => {
        this.products = this.products.filter(product => product.id != id);
        console.log(response);
      }
    );
  }

  ngOnInit(): void{
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

}
