import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-furnitureedit',
  templateUrl: './furnitureedit.component.html',
  styleUrls: ['./furnitureedit.component.scss']
})
export class FurnitureeditComponent {
  furnitureid: any; // Correct the property name to 'ategoryId'
  public CategorydataArray:any[]=[];
  public FurnituredataArray:any;
  furnitureeditformgroup!:FormGroup;
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router,private route:ActivatedRoute) { 
  route.paramMap.subscribe((Params:ParamMap)=>{this.furnitureid=Params.get('id')})
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    this.imageupload();    
  }
  ngOnInit(): void {
    this.db.categoryview().then((data:any)=>{
      this.CategorydataArray=data;
      console.log(data);
  })
    // console.log(this.furnitureid)
    this.furnitureeditformgroup = this.fb.group({
      categoryid:[''],
      furnitureid:[this.furnitureid],
      furniturename:[''],
      description:[''],
      size:[''],
      amount:[''],
      fimage:[''],

    })
    const id=this.furnitureid;
    this.db.furnituredetails({id}).then((data:any)=>{
    this.FurnituredataArray=data;

    console.log(this.FurnituredataArray);
    this.furnitureeditformgroup.setValue({
      categoryid:data[0].categoryid,
      furnitureid:data[0].furnitureid,
    furniturename:data[0].furniturename,
    description:data[0].description,
    size:data[0].size,
    amount:data[0].amount,
    fimage:data[0].fimage,
  
    });
    console.log(this.furnitureeditformgroup.value)
  
    });
   
}
    OnSubmit(){
    if (!this.furnitureeditformgroup.value.image) {
    const data = {
      categoryid:this.furnitureeditformgroup.value.categoryid,
      furnitureid:this.furnitureeditformgroup.value.furnitureid,
      furniturename:this.furnitureeditformgroup.value.furniturename,
      description:this.furnitureeditformgroup.value.description,
      
      size:this.furnitureeditformgroup.value.size,
 
      amount:this.furnitureeditformgroup.value.amount,
      fimage:this.FurnituredataArray[0].fimage,
    }
    this.db.updatefurniture(data).then((confirmation: any) => {
    alert('Furniture Details Updated Successfully');
    this.router.navigate(['/adminmaster/furnitureview']);
    })
    }
    else {
    this.db.updatefurniture(this.furnitureeditformgroup.value).then((confirmation: any) => {
    alert('Furniture Updation Error');
    this.router.navigate(['/adminmaster/furnitureview'])
    })
    }
    }
    imageupload() {
      if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
      this.currentFile = file;
      console.log(this.currentFile)
      this.db.upload(this.currentFile).subscribe(
      (event: any) => {
      this.message = event.body.message;
      });
      }
      this.furnitureeditformgroup.value.image = this.currentFile.name;
      console.log(this.furnitureeditformgroup.value);
      }
      }
      }
    
