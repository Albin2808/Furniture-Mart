import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { LoginComponent } from './guest/login/login.component';
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




const routes: Routes = [{path:'adminmaster',component:AdminmasterComponent,
children:[{path:'adminhome',component:AdminhomeComponent},
{path:'districtreg',component:DistrictregComponent},
{path:'locationreg',component:LocationregComponent},
{path:'categoryreg',component:CategoryregComponent},
{path:'locationview',component:LocationviewComponent},
{path:'categoryview',component:CategoryviewComponent},
{path:'editcategory/:id',component:EditcategoryComponent},
{path:'locationedit/:id',component:LocationeditComponent},
{path:'furniturereg',component:FurnitureregComponent},
{path:'furnitureview',component:FurnitureviewComponent},
{path:'furnitureedit/:id',component:FurnitureeditComponent},
{path:'stock/:id',component:StockComponent},
// {path:'piechart',component:PiechartComponent},
{path:'datewisereport',component:DatewisereportComponent},
{path:'excelreport',component:ExcelreportComponent},
{path:'datepaymentreport',component:DatepaymentreportComponent},
{path:'stockexcel',component:StockexcelComponent},
{path:'pie-report',component:PieReportComponent}
]},

{path:'',redirectTo:'guestmaster/guesthome',pathMatch:'full'},
{path:'guestmaster',component:GuestmasterComponent,
children:[{path:'guesthome',component:GuesthomeComponent},
{path:'login',component:LoginComponent},
{path:'customerreg',component:CustomerregComponent},
{path:'forgotpassword',component:ForgotpasswordComponent}
]},
{path:'customermaster',component:CustomermasterComponent,
children:[{path:'customerhome',component:CustomerhomeComponent},
{path:'furnituredetails/:id',component:FurnituredetailsComponent},
{path:'cart',component:CartComponent},
{path:'delivery',component:DeliveryComponent},
{path:'payment',component:PaymentComponent},
{path:'changepassword',component:ChangepasswordComponent},
{path:'profilechange',component:ProfilechangeComponent},
{path:'profileview',component:ProfileviewComponent},
{path:'paymentconfirmation',component:PaymentconfirmationComponent},
{path:'orders',component:OrdersComponent}
]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
