import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit{
  // esta es la manera de declarar un atributo y a la vez inyectarlo en el constructor
  constructor(private service: ProductService){}

  products: Product[] = [];

  // este método se ejecuta cuando se crea el componente por primera vez unicamente
  ngOnInit(): void{
    // nos estamos suscribiendo a la API Observable para obtener los datos que devuelve
    this.service.findAll().subscribe(productsBack => {

      // le asignamos los productos que vienen del backend 
      this.products = productsBack;
    })
    
  }
}
