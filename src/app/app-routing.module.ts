import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BICreateComponent } from './LSM/BrandInfo/bicreate/bicreate.component';
import { HeaderComponent } from './LSHeader_Footer/header/header.component';
import { FooterComponent } from './LSHeader_Footer/footer/footer.component';
import { VICreateComponent } from './LSM/VendorInfo/vicreate/vicreate.component';
import { DRCreateComponent } from './LSM/DrawerRelease/drcreate/drcreate.component';

const routes: Routes = [
  {
  path: 'BrandInfo',
    children:[
      { path: 'Create',  component: BICreateComponent }
    ],
  },
  {
    path: 'VendorInfo',
      children:[
        { path: 'Create',  component: VICreateComponent }
      ],
    },
    {
      path: 'DrawerRelease',
        children:[
          { path: 'Create',  component: DRCreateComponent }
        ],
      },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
