import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent {
  categoryid: any; // Correct the property name to 'ategoryId'
public categorydataarray:any[]=[];
editcategoryformgroup!:FormGroup;
selectedFiles?: FileList;
currentFile?: any;
message = '';
constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router,private route:ActivatedRoute) { 
route.paramMap.subscribe((Params:ParamMap)=>{this.categoryid=Params.get('id')})
}
selectFile(event: any): void {
this.selectedFiles = event.target.files;
console.log(this.selectedFiles);
this.imageupload();
}
ngOnInit(): void {
  console.log(this.categoryid)
  this.editcategoryformgroup = this.fb.group({
  categoryid:[''],
  categoryname:[''],
  description:[''],
  image:[''],
  })
  const id=this.categoryid;
  this.db.getcategorydetails({id}).then((data:any)=>{
  this.categorydataarray=data;
  console.log(this.categorydataarray);
  this.editcategoryformgroup.setValue({
  categoryid:this.categorydataarray[0].categoryid,
  categoryname:this.categorydataarray[0].categoryname,
  description:this.categorydataarray[0].description,
  image:this.categorydataarray[0].image,
  });
  console.log(this.editcategoryformgroup.value)
  });
  }
  onSubmit(){
  if (!this.editcategoryformgroup.value.image) {
  const data = {
  categoryname: this.editcategoryformgroup.value.categoryname,
  description: this.editcategoryformgroup.value.description,
  image:this.categorydataarray[0].image, 
  }
  this.db.updatecategory(data).then((confirmation: any) => {
  alert('category Details Updated Successfully');
  // this.router.navigate(['/Adminmaster /categoryview])
  })
  }
  else {
  this.db.updatecategory(this.editcategoryformgroup.value).then((confirmation: 
  any) => {
  alert('category Details Updated Successfully');
  this.router.navigate(['/adminmaster/categoryview'])
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
    this.editcategoryformgroup.value.image = this.currentFile.name;
    console.log(this.editcategoryformgroup.value);
    }
    }
    }
