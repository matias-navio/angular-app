import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  // declaramos un arreglo de objetos de tipo Product
  private products: Product[] = [
    // {
    //   id: 1,
    //   name: 'iPhone 15',
    //   description: 'Exlente celular',
    //   price: 1200
    // },
    // {
    //   id: 2,
    //   name: 'Monitor Samsung',
    //   description: 'Exlente monitor',
    //   price: 1000
    // },
    // {
    //   id: 3,
    //   name: 'Mouse Logitech',
    //   description: 'Exlente mouse',
    //   price: 300
    // }
  ];

  private url: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  /**
   * Observable se usa en la programacion reactiva para represemtar uan secuencia de datos
   * asincrónicos, lo podemos usar en este caso para peticiones HTTP
   * Para recibir lo que devuelve el Observable despues nos tenemos que suscribir
   */
  findAll(): Observable<Product[]> {
    // usamos metodo get con el tipo de observable que este devuelve y la url del backend
    return this.http.get<Product[]>(this.url).pipe(
      map((response:any) => response._embedded.products as Product[]),
    );
  }

  create(product: Product): Observable<Product>{

    return this.http.post<Product>(this.url, product);
  }

  update(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
