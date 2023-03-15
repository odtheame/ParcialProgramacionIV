import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit{

  constructor(public api: ApiService){}

  ngOnInit(): any{
    var response = this.api.getAll("Repuestoes")
    console.log(response)
    return response
  }

}
