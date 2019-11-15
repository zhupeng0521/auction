import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs';
import 'rxjs/Rx'
import { URLSearchParams } from 'url';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchEvent:EventEmitter<ProducrSearchParams> = new EventEmitter();

  getAllCategories():string[]{
    return ["电子产品","图书产品","虚拟物品"]
  }
  constructor(private http: Http) { }
  
  getProducts(): Observable<Product[]>{
    return this.http.get("/api/products").map(res =>res.json());
  }
  getProduct(id:number):Observable<Product>{

    return this.http.get("/api/products/"+id).map(res =>res.json());
  }
  getCommentsForProductId(id: number):Observable<Comment[]>{
    return this.http.get("/api/products/"+id+"/comments").map(res =>res.json());
  }
  search(params:ProducrSearchParams):Observable<Product[]>{
    return this.http.get("/api/products",{search:params}).map(res =>res.json())
    
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}
export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ){}
}
export class ProducrSearchParams {
  constructor(
    public title:string,
    public price:number,
    public category:string
  ){}
}