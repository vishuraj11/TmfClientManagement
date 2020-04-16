import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
  
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator; 

  clients :any  = [];
  numberOfClients:number=0;
  config: any;
  searchText:string;
  displayedColumns: string[] = ['clientName', 'companyName', 'noOfEntities', 'activeUser','countries'];

  constructor(private httpClient: HttpClient) { 

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.clients.length
    };
  }

  ngOnInit(): void {  
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
     // this.clients = data;
     this.clients=data;
      this.clients.sort=this.sort;
      this.clients.paginator=this.paginator;
      this.numberOfClients=this.clients.length;
      
    })
  }  
  
  pageChanged(event){
    this.config.currentPage = event;

  }

}
