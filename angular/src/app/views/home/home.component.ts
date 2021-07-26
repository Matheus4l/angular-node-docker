import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import {ClientesService} from '../../services/clientes.service'
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private clientesService:ClientesService) { }
 
  dataSource: any

  displayedColumns: string[] = ['nome', 'valor', 'desde', ];
  

   ngOnInit() {
   
    this.clientesService.getCliente().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    error => {
      
    });
  }

  ngAfterViewInit() {
   
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
