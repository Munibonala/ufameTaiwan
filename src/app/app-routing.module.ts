import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LayoutDesignComponent } from './components/layout-design/layout-design.component';
import { IcPackingComponent } from './components/ic-packing/ic-packing.component';
import { HdiComponent } from './components/hdi/hdi.component';
import { QualityComponent } from './components/quality/quality.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"layout-design",component:LayoutDesignComponent},
  {path:"ic-packing",component:IcPackingComponent},
  {path:"hdi",component:HdiComponent},
  {path:"quality",component:QualityComponent},
  {path:"service",component:ServiceComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"**",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
