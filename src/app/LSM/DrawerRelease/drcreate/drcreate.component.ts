import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/ApiService/api.service';
import { DrawerRelease } from './drcreate.component.model';

@Component({
  selector: 'app-drcreate',
  templateUrl: './drcreate.component.html',
  styleUrls: ['./drcreate.component.css']
})
export class DRCreateComponent implements OnInit {

  DrawerReleaseModelObj : DrawerRelease = new DrawerRelease();
  formValue !: FormGroup

  AllLockerName : any;
  AllDrawerName : any;

  showMe : boolean=false
  constructor(private formBuilder : FormBuilder, private Api : ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
    relid:[''],
    actnum:[''],
    drwrid:[''],
    paystat:[''],
    remarks:[''],
    dueamt:[''],
    lckrid:[''],
    reldate:[''],
    oprstamp:[''],
    oprtimstamp:[''],
    actype:[''],
    update_DATE:[''],
    appflg:[''],
    numofdrwr:[''],
    appstamp:[''],
    apptimstamp:[''],
    updstamp:[''],
    updtimstamp:[''],
    cuscod:[''],
    oprbrancd:[''],
    cautionamt:[''],
    marketval:[''],
    allocatdate:[''],
    expdate:[''],
    saleval:[''],
    responseMessage:[''],
      });

      this.Api.GetLockerSpecifications()
    .subscribe(res =>{
      this.AllLockerName=res;
    });
    
    this.Api.GetDrawerManagements()
    .subscribe(res =>{
      this.AllDrawerName=res;
    });
  }

  CreateDrawerRelease(){
    this.DrawerReleaseModelObj.relid=this.formValue.value.relid;
    this.DrawerReleaseModelObj.actnum=this.formValue.value.actnum;
    this.DrawerReleaseModelObj.lckrid=this.formValue.value.lckrid;
    this.DrawerReleaseModelObj.cuscod='00038608';
    this.DrawerReleaseModelObj.oprbrancd='A03';
    this.DrawerReleaseModelObj.drwrid=this.formValue.value.drwrid;
    this.DrawerReleaseModelObj.remarks=this.formValue.value.remarks;   
    this.DrawerReleaseModelObj.reldate=this.formValue.value.expdate; 
    this.DrawerReleaseModelObj.paystat=this.formValue.value.paystat;   
    this.DrawerReleaseModelObj.dueamt=this.formValue.value.dueamt;  
    this.DrawerReleaseModelObj.apptimstamp="2022-02-07"
    this.DrawerReleaseModelObj.oprstamp = 'system';

    console.log(this.DrawerReleaseModelObj)

    this.Api.CreateDrawerRelease(this.DrawerReleaseModelObj)
    .subscribe(res =>{
      console.log(res)
      alert(res.responseMessage);
      this.formValue.reset();
    },
    err=>{
      alert("Something Wrong");
    })
  }

  GetDataByAccountNo(event : any){
    console.log("Event Succefully");
    this.DrawerReleaseModelObj.actnum=this.formValue.value.actnum;
    console.log(this.DrawerReleaseModelObj.actnum);
    this.Api.GetDrawerAllocationByAccountNo(this.DrawerReleaseModelObj.actnum)
    .subscribe(res=>{
      console.log(res);
      this.getOnForm1(res);
    },
    err=>{
      alert("No Data Found!");
    })
  }

  getOnForm1(res:any){
    this.formValue.controls['lckrid'].patchValue(res.lckrid);
    this.formValue.controls['drwrid'].patchValue(res.drwrid);
    this.formValue.controls['expdate'].patchValue(res.expdate);
    this.formValue.controls['allocatdate'].patchValue(res.allocatdate);
    this.formValue.controls['saleval'].patchValue(res.saleval);
    this.formValue.controls['marketval'].patchValue(res.marketval);
    this.formValue.controls['cautionamt'].patchValue(res.cautionamt);
    this.formValue.controls['paystat'].patchValue(res.paystat);
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
    this.DrawerReleaseModelObj.relid=this.formValue.value.relid;
    console.log(this.DrawerReleaseModelObj.relid);
    this.Api.GetDrawerReleaseById(this.DrawerReleaseModelObj.relid)
    .subscribe(res=>{
      console.log(res);
      this.UpdateOnForm(res);
    },
    err=>{
      alert("No Data Found!");
    })
  }

  UpdateOnForm(res : any){
    this.formValue.controls['lckrid'].patchValue(res.lckrid);
    this.formValue.controls['drwrid'].patchValue(res.drwrid);
    this.formValue.controls['actnum'].patchValue(res.actnum);
    this.formValue.controls['expdate'].patchValue(res.reldate);
    this.formValue.controls['remarks'].patchValue(res.remarks);
    this.formValue.controls['paystat'].patchValue(res.paystat);
  }

  GetDataByAccountNumber(event : any){
    console.log("Event Succefully");
    this.DrawerReleaseModelObj.actnum=this.formValue.value.actnum;
    console.log(this.DrawerReleaseModelObj.actnum);
    this.Api.GetDrawerAllocationByAccountNo(this.DrawerReleaseModelObj.actnum)
    .subscribe(res=>{
      console.log(res);
      this.getOnForm2(res);
    },
    err=>{
      alert("No Data Found!");
    })
  }
  getOnForm2(res:any){
    this.formValue.controls['allocatdate'].patchValue(res.allocatdate);
    this.formValue.controls['saleval'].patchValue(res.saleval);
    this.formValue.controls['marketval'].patchValue(res.marketval);
    this.formValue.controls['cautionamt'].patchValue(res.cautionamt);
  }

 UpdateDrawerRelease(){
  this.DrawerReleaseModelObj.remarks=this.formValue.value.remarks;
  this.DrawerReleaseModelObj.paystat=this.formValue.value.paystat;
  this.DrawerReleaseModelObj.dueamt=this.formValue.value.dueamt; 
  this.DrawerReleaseModelObj.reldate=this.formValue.value.expdate;
  this.DrawerReleaseModelObj.apptimstamp="2022-02-07"
  this.DrawerReleaseModelObj.oprstamp = 'system';

  console.log(this.DrawerReleaseModelObj);

  this.Api.UpdateDrawerReleaseById(this.DrawerReleaseModelObj.relid, this.DrawerReleaseModelObj)
    .subscribe(res=>{
      console.log(res)
      alert("Drawer Release Update Succefully")
      let ref=document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
    },
      err=>{
        alert("Something wrong");
      })
 }

}
