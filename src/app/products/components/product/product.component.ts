import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { FormComponent } from "../form/form.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [FormComponent]
})

export class ProductComponent implements OnInit{

  title: string = 'Lista de productos';
  // esta es la manera de declarar un atributo y a la vez inyectarlo en el constructor
  constructor(private service: ProductService){}

  products: Product[] = [];

  productSelected: Product = new Product();

  // este método se ejecuta cuando se crea el componente por primera vez unicamente
  ngOnInit(): void{
    // nos estamos suscribiendo a la API Observable para obtener los datos que devuelve
    this.service.findAll().subscribe(productsBack => {

      // le asignamos los productos que vienen del backend 
      this.products = productsBack;
    })
  }

  addProduct(product : Product) : void{
    // si id el mayor a 0 es porque vamos a editarlo
    if(product.id > 0){

      this.products = this.products.map(prod => {
        if(prod.id == product.id){
          return {...product};
        }
        return prod;

      });
    } else{
      product.id = new Date().getTime();
      this.products.push(product);    
    }
  }

  onEditProduct(prodRow: Product): void{
    this.productSelected = prodRow;
  } 
}
