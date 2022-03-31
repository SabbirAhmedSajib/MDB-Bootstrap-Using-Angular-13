import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Commont URL For Every Page
   API_URL = 'http://localhost:8888/api/LSM';

  constructor(private http : HttpClient) { }

  //  Brand Info API

  CreateBrandInfo(data:any){
    return this.http.post<any>(this.API_URL+'/AddBrandInfo', data)
      .pipe(map((res:any)=> {
        return res;
      }))
  }

  GetByBrandInfoId(id : any){
    return this.http.get(this.API_URL+'/BrandInfo/'+id);   
  }

  UpdateBrandInfo(id : any, data : any){
    return this.http.put<any>(this.API_URL+'/BrandInfo/'+id,data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  GetBrandInfos(){
    return this.http.get(this.API_URL+'/GetBrandInfos');   
  }

  //  Vendor Info API

  CreateVendorInfo(data:any){
    return this.http.post<any>(this.API_URL+'/AddVendor', data)
      .pipe(map((res:any)=> {
        return res;
      }))
  }

  GetByVendorInfoId(id : any){
    return this.http.get(this.API_URL+'/Vendor/'+id);   
  }

  UpdateVendorInfo(id : any, data : any){
    return this.http.put<any>(this.API_URL+'/Vendor/'+id,data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  GetVendorInfos(){
    return this.http.get(this.API_URL+'/GetVendors');   
  }

  //  Locker Specification Info API

  CreateLockerSpecification(data:any){
    return this.http.post<any>(this.API_URL+'/AddLockerSpecification', data)
      .pipe(map((res:any)=> {
        return res;
      }))
  }

  GetByLockerSpecificationId(LCKRID : any){
    console.log("before change "+typeof (LCKRID))
    return this.http.get(this.API_URL+'/LockerSpecification/'+LCKRID);
    
  }

    

  UpdateLockerSpecification(id : any, data : any){
    return this.http.put<any>(this.API_URL+'/LockerSpecification/'+id,data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  GetLockerSpecifications(){
    return this.http.get(this.API_URL+'/GetLockerSpecification');   
  }

  
  //Locker Allocation Info API

  CreateLockerAllocation(data:any){
    return this.http.post<any>(this.API_URL+'/AddLockerAllocate', data)
      .pipe(map((res:any)=> {
        return res;
      }))
  }


    //  Dulicate Key Request API

    CreateDupKeyReq(data:any){
      return this.http.post<any>(this.API_URL+'/AddDupKey', data)
        .pipe(map((res:any)=> {
          return res;
        }))
    }

    GetDuplicateKeyById(id : any){
      return this.http.get(this.API_URL+'/GetDupKeyId/'+id);   
    }

    UpdateDuplicateKey(id : any, data : any){
      return this.http.put<any>(this.API_URL+'/UpdateDupKeyId/'+id,data)
      .pipe(map((res:any)=> {
        return res;
      }))
    }



  GetByLockerAllocationId(id : any){
    return this.http.get(this.API_URL+'/LockerAllocate/'+id);   
  }

  UpdateLockerAllocation(allocatid : number, data : any){
    return this.http.put<any>(this.API_URL+'/LockerAllocate/'+allocatid,data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  GetLockerAllocationInfos(){
    return this.http.get(this.API_URL+'/GetLockerAllocates');   
  }

  //Branch Info Api
  GetBranchInfos(){
    return this.http.get(this.API_URL+'/GetBranchInfos');   
  }

  //Drawer Allocate API

  CreateDrawerAllocate(data:any){
    return this.http.post<any>(this.API_URL+'/AddDrawerAllocate', data)
      .pipe(map((res:any)=> {
        return res;
      }))
  }

  GetByDrawerAllocateId(id : any){
    return this.http.get(this.API_URL+'/DrawerAllocate/id'+id);   
  }

  UpdateDrawerAllocate(id : any, data : any){
    return this.http.put<any>(this.API_URL+'/DrawerAllocate/id',data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }



  GetDrawerManagements(){
    return this.http.get(this.API_URL+'/GetDrawerManagements');   
  }


  
  GetDrawerAllocationByAccountNo(id : string){
    return this.http.get(this.API_URL+'/'+id);   
  }

 
  CreateDrawerRelease(data:any){
    return this.http.post<any>(this.API_URL+'/AddDrawerRelease', data)
      .pipe(map((res:any)=> {
        return res;
      }))
  }

  GetDrawerReleaseById(id : any){
    return this.http.get(this.API_URL+'/DrawerRelease/'+id);   
  }

  UpdateDrawerReleaseById(id : any, data : any){
    return this.http.put<any>(this.API_URL+'/DrawerRelease/'+id,data)
    .pipe(map((res:any)=> {
      return res;
    }))
  }
/*
  GetVendorInfos(){
    return this.http.get(this.API_URL+'/GetVendors');   
  }

  */

}

