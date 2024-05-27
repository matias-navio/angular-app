import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  // esto haeia lo contrario de Output, en vez de que el hijo le pase al padre
  // en este caso traemos el objeto selecionado del padre y se lo poblamos al hijo
  @Input() product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  // de esta manera vamos a transferir iformación al padre, en este caso a Product Component
  // la info sería los productos nuevos que se agreguen a la tabla
  @Output() newProdcutEvent = new EventEmitter();

  // método para enviar datos de los inputs y agregarlos a las tabla
  onSubmit(productForm: NgForm): void{
    if(productForm.valid){
      this.newProdcutEvent.emit(this.product);
    }
    productForm.resetForm();
  }

  resetForm(): void{
    this.product = new Product();
  } 

}
