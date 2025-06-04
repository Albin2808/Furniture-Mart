import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { LoginComponent } from './guest/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DistrictregComponent } from './admin/districtreg/districtreg.component';
import { LocationregComponent } from './admin/locationreg/locationreg.component';
import { CategoryregComponent } from './admin/categoryreg/categoryreg.component';
import { LocationviewComponent } from './admin/locationview/locationview.component';
import { CategoryviewComponent } from './admin/categoryview/categoryview.component';
import { EditcategoryComponent } from './admin/editcategory/editcategory.component';
import { LocationeditComponent } from './admin/locationedit/locationedit.component';
import { FurnitureregComponent } from './admin/furniturereg/furniturereg.component';
import { FurnitureviewComponent } from './admin/furnitureview/furnitureview.component';
import { FurnitureeditComponent } from './admin/furnitureedit/furnitureedit.component';
import { StockComponent } from './admin/stock/stock.component';
import { CustomerregComponent } from './guest/customerreg/customerreg.component';
import { CustomermasterComponent } from './customer/customermaster/customermaster.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { FurnituredetailsComponent } from './customer/furnituredetails/furnituredetails.component';
import { CartComponent } from './customer/cart/cart.component';
import { DeliveryComponent } from './customer/delivery/delivery.component';
import { PaymentComponent } from './customer/payment/payment.component';
// import { PiechartComponent } from './admin/piechart/piechart.component';
import { DatewisereportComponent } from './admin/datewisereport/datewisereport.component';
import { ExcelreportComponent } from './admin/excelreport/excelreport.component';
import { DatepaymentreportComponent } from './admin/datepaymentreport/datepaymentreport.component';
import { StockexcelComponent } from './admin/stockexcel/stockexcel.component';
import { ForgotpasswordComponent } from './guest/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './customer/changepassword/changepassword.component';
import { PieReportComponent } from './admin/pie-report/pie-report.component';
import { ProfilechangeComponent } from './customer/profilechange/profilechange.component';
import { ProfileviewComponent } from './customer/profileview/profileview.component';
import { PaymentconfirmationComponent } from './customer/paymentconfirmation/paymentconfirmation.component';
import { OrdersComponent } from './customer/orders/orders.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    AdminmasterComponent,
    GuestmasterComponent,
    GuesthomeComponent,
    LoginComponent,
    DistrictregComponent,
    LocationregComponent,
    CategoryregComponent,
    LocationviewComponent,
    CategoryviewComponent,
    EditcategoryComponent,
    LocationeditComponent,
    FurnitureregComponent,
    FurnitureviewComponent,
    FurnitureeditComponent,
    StockComponent,
    CustomerregComponent,
    CustomermasterComponent,
    CustomerhomeComponent,
    FurnituredetailsComponent,
    CartComponent,
    DeliveryComponent,
    PaymentComponent,
    // PiechartComponent,
    DatewisereportComponent,
    ExcelreportComponent,
    DatepaymentreportComponent,
    StockexcelComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    PieReportComponent,
    ProfilechangeComponent,
    ProfileviewComponent,
    PaymentconfirmationComponent,
    OrdersComponent,
  
  


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
