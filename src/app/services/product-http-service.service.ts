import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../entities/product.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpServiceService {
  readonly API_URL ="https://api.escuelajs.co/api/v1/products";

  constructor(private httpClient: HttpClient) {}
  //traer todos los productos
  getAll():Observable<ProductModel>{
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProductModel>(url);
  }
  //traer un producto
  getOne(id:ProductModel['id']):Observable<ProductModel>{
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.get<ProductModel>(url);
  }
  //Crear un producto
  store(product:CreateProductDto):Observable<ProductModel>{
    const url = `${this.API_URL}`;
    return this.httpClient.post<ProductModel>(url, product)
  }
  //Actualizar un producto
  update(id:ProductModel['id'], product:UpdateProductDto):Observable<ProductModel>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProductModel>(url, product)
  }
  //Eliminar un producto
  destroy(id:ProductModel['id']):Observable<any>{
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: {rta:boolean}) =>{
      return response.rta;
    })
    );
  }
}
