import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-furniturereg',
  templateUrl: './furniturereg.component.html',
  styleUrls: ['./furniturereg.component.scss']
})
export class FurnitureregComponent {
  selectedFiles?: FileList;
  currentFile?: any;
      message = '';
  fileInfos?: Observable<any>;
  // db: any;
  public CategorydataArray:any[]=[];
  constructor(private fb:FormBuilder,private dbservice:DbserviceService,private router:Router) { }
  furnitureregformgroup=this.fb.group({
    fname:[''],
    description:[''],
    categoryid:[''],
    size:[''],
    fimage:[''],
    amount:['']
  })
  
  ngOnInit(): void { 
    this.dbservice.categoryview().then((data:any)=>{
    this.CategorydataArray=data;
    })
    }
    selectFile(event: any): void {
      this.selectedFiles = event.target.files; 
    }
 
    OnSubmit() {
        if (this.selectedFiles) {
          // console.log(this.selectedFiles);
          const file: File | null = this.selectedFiles.item(0);
          if (file) {
            this.currentFile = file;
    
            this.dbservice.upload(this.currentFile).subscribe(
              (event: any) => {
                this.message = event.body.message;
              });
    
            this.furnitureregformgroup.value.fimage = this.currentFile.name;
    
            // console.log(this.productimage);
            this.dbservice.furniturereg(this.furnitureregformgroup.value).then((confirmation: any) => 
            {
              console.log(confirmation)
              if (confirmation.message === "Success") {
                alert('Furniture Registered')
                this.router.navigate(['/adminmaster/furnitureview'])
              }
              else
              {
                alert("Data not inserted")
              }
            })
            console.log(this.furnitureregformgroup.value)
          }
        }
      }
    }