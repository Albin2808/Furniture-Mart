import { Component, ElementRef, ViewChild } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-stockexcel',
  templateUrl: './stockexcel.component.html',
  styleUrls: ['./stockexcel.component.scss']
})
export class StockexcelComponent {
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef; 

  title = 'Excel'; 
  ExportTOExcel() { 
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement); 
    const wb: XLSX.WorkBook = XLSX.utils.book_new(); 
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); 
    XLSX.writeFile(wb, 'stockdetails.xlsx'); 
  } 
  public stockdata:any[]=[]; 
    constructor(private dbservice:DbserviceService) {} 
    successmsg:any; 
   
    ngOnInit(): void { 
      this.stockviewdata(); 
       
    } 
    stockviewdata(){ 
      this.dbservice.stockview().then((data:any)=>{this.stockdata=data;}
      )}
}
