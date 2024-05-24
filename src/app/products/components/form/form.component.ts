import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  // de esta manera vamos a transferir iformación al padre, en este caso a Product Component
  // la info sería los productos nuevos que se agreguen a la tabla
  @Output() newProdcutEvent = new EventEmitter();

  // método para enviar datos de los inputs y agregarlos a las tabla
  onSubmit(): void{
    this.newProdcutEvent.emit(this.product);
    console.log(this.product);
  }

}
