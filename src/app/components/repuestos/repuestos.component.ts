import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit{

  constructor(public api: ApiService){}

  ngOnInit(): any{
    var response = this.api.getAll("Vehiculoes")
    console.log(response)
    return response
  }

}
