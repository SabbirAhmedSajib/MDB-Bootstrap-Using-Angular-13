import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BICreateComponent } from './LSM/BrandInfo/bicreate/bicreate.component';
import { HeaderComponent } from './LSHeader_Footer/header/header.component';
import { FooterComponent } from './LSHeader_Footer/footer/footer.component';
import { MenuComponent } from './LSMenu/menu/menu.component';
import { VICreateComponent } from './LSM/VendorInfo/vicreate/vicreate.component';
import { DRCreateComponent } from './LSM/DrawerRelease/drcreate/drcreate.component';



@NgModule({
  declarations: [
    AppComponent,
    BICreateComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    VICreateComponent,
    DRCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
