import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "./products/components/product/product.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ProductComponent]
})

export class AppComponent {
  name: String = ' Hola Matias Navio';

  enabled: boolean = false;

  courses: string[] = ['Angular', 'React', 'Spring'];

  setEnable(): void {
    this.enabled = this.enabled ? false : true;
  }
}
