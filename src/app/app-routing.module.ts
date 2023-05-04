import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculosFormComponent } from './forms/vehiculos-form/vehiculos-form.component';
import { RepuestosFormComponent } from './forms/repuestos-form/repuestos-form.component';

const routes: Routes = [
  {path:"", component:VehiculosComponent},
  {path:"Vehiculos", component:VehiculosComponent},
  {path:"Repuestos", component:RepuestosComponent},
  {path:"FormVehiculos", component:VehiculosFormComponent},
  {path:"FormRepuestos", component:RepuestosFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
