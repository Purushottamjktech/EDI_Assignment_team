import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestServicesService {

  constructor(private _http:HttpClient) { }

  sendingDataToNode(ab:any){
   return this._http.post('http://localhost:8000/edi/data',ab,
      
    )
 }
}
