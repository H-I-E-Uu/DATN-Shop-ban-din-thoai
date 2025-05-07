import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NikeService {

  constructor(private http : HttpClient) { }
  ListNike(){
    return this.http.get(`http://localhost:3000/nikes`)
  }
  ListNikeId(id:string){
    return this.http.get(`http://localhost:3000/nikes/${id}`)
  }
  AddNike(data:any){
    return this.http.post(`http://localhost:3000/nikes`,data)
  }
  DeleteNile(id:string){
    return this.http.delete(`http://localhost:3000/nikes/${id}`)
  }
  UpdataNike(id:string,data:any){
    return this.http.put(`http://localhost:3000/nikes/${id}`,data)
  }
}
