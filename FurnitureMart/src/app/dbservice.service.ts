import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  viewcategorydata() {
    throw new Error('Method not implemented.');
  }
  sendrequest(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post("http://localhost:3000/login",data).toPromise();
  }
    districtreg(data:any){
      return this.http.post("http://localhost:3000/districtreg",data).toPromise();
      
    }
    locationreg(data:any)
{
  return this.http.post("http://localhost:3000/locationreg",data).toPromise(); 
}
districtview()
{
  return this.http.get("http://localhost:3000/districtview").toPromise() ;
 
}

upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
  formData.append('file', file);
  const req = new HttpRequest('POST', `http://localhost:3000/upload`, 
  formData, {
  reportProgress: true,
  responseType: 'json'
  });
  return this.http.request(req);
  }


  categoryreg(data:any)
{
  return this.http.post("http://localhost:3000/categoryreg",data).toPromise(); 
} 
getdistrictbyid(data:any)
{
  return this.http.post("http://localhost:3000/getdistrictbyid",data).toPromise(); 
} 
locationview()
{
  return this.http.get("http://localhost:3000/locationview").toPromise(); 
}  
categoryview()
{
  return this.http.get("http://localhost:3000/categoryview").toPromise(); 
}  
Deletelocationdata(data:any){
  return this.http.post("http://localhost:3000/locationdelete",data).toPromise()
    
}
Deletecategorydata(data:any){
  return this.http.post("http://localhost:3000/categorydelete",data).toPromise()
    
}
getcategorydetails(data:any)
{
return this.http.post<any>("http://localhost:3000/getcategorydetails",data).toPromise()
}
updatecategory(data:any)
{
return this.http.post<any>("http://localhost:3000/updatecategory",data).toPromise()
}
locationedit(data:any)
{
return this.http.post<any>("http://localhost:3000/locationedit",data).toPromise()
}
getlocationdetails(data:any)
{
return this.http.post<any>("http://localhost:3000/getlocationdetails",data).toPromise()
}
furniturereg(data:any)
{
return this.http.post<any>("http://localhost:3000/furniturereg",data).toPromise()
}
furnitureview()
{
return this.http.get("http://localhost:3000/furnitureview").toPromise()
}
getfurniturebyid(data:any){
  return this.http.post<any>("http://localhost:3000/getfurniturebyid",data).toPromise();  
}
Deletefurnituredata(data:any){
  return this.http.post("http://localhost:3000/Deletefurnituredata",data).toPromise()
    
}
furnituredetails(data:any)
{
return this.http.post<any>("http://localhost:3000/furnituredetails",data).toPromise()
}
updatefurniture(data:any)
{
return this.http.post<any>("http://localhost:3000/updatefurniture",data).toPromise()
}
stockreg(data:any)
{
return this.http.post<any>("http://localhost:3000/stockreg",data).toPromise()
}
customerreg(data:any)
{
return this.http.post<any>("http://localhost:3000/customerreg",data).toPromise()
}

addtocart(data:any)
{
return this.http.post<any>("http://localhost:3000/addtocart",data).toPromise()
}
cartview(data:any)
{
  return this.http.post<any>("http://localhost:3000/cartview",data).toPromise(); 
} 
Deletecartitem(data:any){
  return this.http.post("http://localhost:3000/Deletecartitem",data).toPromise()
    
}
carttotal(data:any)
{
return this.http.post("http://localhost:3000/carttotal",data).toPromise()
}
booking(data:any)
{
return this.http.post<any>("http://localhost:3000/booking",data).toPromise()
}

getcustomer(data:any)
{
return this.http.post<any>("http://localhost:3000/getcustomer",data).toPromise()
}
delivery(data:any)
{
return this.http.post<any>("http://localhost:3000/delivery",data).toPromise()
}
viewcartdetails(data:any){
  return this.http.post("http://localhost:3000/viewcartdetails",data).toPromise()
}
viewgrandtotal(data:any){
  return this.http.post("http://localhost:3000/viewgrandtotal",data).toPromise()
}
payment(data:any)
{
return this.http.post<any>("http://localhost:3000/payment",data).toPromise()
}
categoryviewpie(){ 
  return this.http.get("http://localhost:3000/categoryviewpie").toPromise() 

}
report(data:any){ 
  return this.http.post("http://localhost:3000/report",data).toPromise() 
}
reportpayment(data:any){ 
  return this.http.post("http://localhost:3000/reportpayment",data).toPromise() 
}
productview() { 
  return this.http.get("http://localhost:3000/furnitureexcel").toPromise(); 
}
stockview() { 
  return this.http.get("http://localhost:3000/stockexcel").toPromise(); 
}
forgotpassword(data:any)
{
return this.http.post<any>("http://localhost:3000/forgotpassword",data).toPromise()
}
changepassword(data:any)
{
return this.http.post<any>("http://localhost:3000/changepassword",data).toPromise()
}
logout(data:any)
{
return this.http.post<any>("http://localhost:3000/logout",data).toPromise()
}
updatecustomer(data:any)
{
return this.http.post<any>("http://localhost:3000/updatecustomer",data).toPromise()
}
profileedit(data:any)
{
return this.http.post<any>("http://localhost:3000/profileedit",data).toPromise()
}
paymentconfirm(data:any)
{
return this.http.post<any>("http://localhost:3000/paymentconfirm",data).toPromise()
}
}
