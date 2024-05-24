import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  // declaramos un arreglo de objetos de tipo Product
  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Exlente celular',
      price: 1200
    },
    {
      id: 2,
      name: 'Monitor Samsung',
      description: 'Exlente monitor',
      price: 1000
    },
    {
      id: 3,
      name: 'Mouse Logitech',
      description: 'Exlente mouse',
      price: 300
    }
  ];

  constructor() { }

  /**
   * Observable se usa en la programacion reactiva para represemtar uan secuencia de datos
   * asincrónicos, lo podemos usar en este caso para peticiones HTTP
   * Para recibir lo que devuelve el Observable despues nos tenemos que suscribir
   */
  findAll(): Observable<Product[]> {
    
    return of(this.products);
  }
}
