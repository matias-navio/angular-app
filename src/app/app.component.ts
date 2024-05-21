import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name: String = ' Hola Matias Navio';

  enabled: boolean = false;

  courses: string[] = ['Angular', 'React', 'Spring'];

  setEnable(): void {
    this.enabled = this.enabled ? false : true;
  }
}
