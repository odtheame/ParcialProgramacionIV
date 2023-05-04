import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit{

  constructor(public api: ApiService, public tableService: TableService){}

  async ngOnInit() {
    var own = await this.GetRepuestos();
    this.tableService.setResponseTable(own);
  }

  async GetRepuestos(): Promise<any>{
    var get = await this.api.getAll("Repuestoes")
    return get;
  }

}
