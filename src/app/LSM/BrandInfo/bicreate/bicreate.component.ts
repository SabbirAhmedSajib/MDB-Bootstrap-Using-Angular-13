import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/ApiService/api.service';
import { BrandModel } from './bicreate.component.model';

@Component({
  selector: 'app-bicreate',
  templateUrl: './bicreate.component.html',
  styleUrls: ['./bicreate.component.css']
})
export class BICreateComponent implements OnInit {

  BrandModeloObj: BrandModel = new BrandModel();

  formValue !: FormGroup

  showMe : boolean=false
  constructor(private formBuilder : FormBuilder, private Api : ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      brdcod:[''],
      brdtit:[''],
      brdcountry:[''],
      status:[''],
      remarks:[''],
      oprstamp:[''],
      oprtimstamp:[''],
      updstamp:[''],
      updtimstamp:[''],
      responseMessage:[''],
    });
  }

  CreateBrand(){
    
    this.BrandModeloObj.brdcod=this.formValue.value.brdcod;
    this.BrandModeloObj.brdtit=this.formValue.value.brdtit;

    this.BrandModeloObj.brdcountry=this.formValue.value.brdcountry;
    this.BrandModeloObj.remarks=this.formValue.value.remarks;   

    this.Api.CreateBrandInfo(this.BrandModeloObj)
    .subscribe(res =>{
      console.log(res)
      alert(res.responseMessage);
      this.formValue.reset();
    },
    err=>{
      alert("Something Wrong");
    })
  }

  onKeyPress(event : any){
    this.showMe =! this.showMe
  }

  close() {
    this.showMe=! this.showMe
  }

  ClearPage(){
    this.formValue.reset();
  }

  DataGet(){
    console.log("Event Succefully");
    this.BrandModeloObj.brdcod=this.formValue.value.brdcod;
    console.log(this.BrandModeloObj.brdcod);
    this.Api.GetByBrandInfoId(this.BrandModeloObj.brdcod)
    .subscribe(res=>{
      console.log(res);
      this.UpdateOnForm(res);
    },
    err=>{
      alert("No Data Found!");
    })
  }

  UpdateOnForm(res : any){
    this.formValue.controls['brdcod'].patchValue(res.brdcod);
    this.formValue.controls['brdtit'].patchValue(res.brdtit);
    this.formValue.controls['brdcountry'].patchValue(res.brdcountry);
    this.formValue.controls['remarks'].patchValue(res.remarks);
  }

 UpdateBrandInfo(){
  this.BrandModeloObj.brdcod=this.formValue.value.brdcod;
  this.BrandModeloObj.brdtit=this.formValue.value.brdtit;

  this.BrandModeloObj.brdcountry=this.formValue.value.brdcountry;
  this.BrandModeloObj.remarks=this.formValue.value.remarks;   

  console.log(this.BrandModeloObj);

  this.Api.UpdateBrandInfo(this.BrandModeloObj.brdcod, this.BrandModeloObj)
    .subscribe(res=>{
      console.log(res)
      alert(res.responseMessage)
      let ref=document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
    },
      err=>{
        alert("Something wrong");
      })
 }
}
