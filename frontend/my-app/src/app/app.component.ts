import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  title = 'Mi Aplicación';
  usuario = { nombre: '', email: '', edad: null };
  usuarios: any[] = [];

  onSubmit(): void {
    if (this.usuario.nombre && this.usuario.email && this.usuario.edad !== null) {
      this.usuarios.push({ ...this.usuario });
      this.usuario = { nombre: '', email: '', edad: null };
    } else {
      alert('Por favor complete todos los campos');
    }
  }

  removeUser(index: number): void {
    this.usuarios.splice(index, 1);
  }
}
