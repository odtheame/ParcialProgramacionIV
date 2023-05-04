import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehiculos-form',
  templateUrl: './vehiculos-form.component.html',
  styleUrls: ['./vehiculos-form.component.css']
})
export class VehiculosFormComponent {
  addressForm = this.fb.group({
    marca: [null, Validators.required],
    color: [null, Validators.required],
    modelo: [null, Validators.required],
    placa: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )
  }
}
