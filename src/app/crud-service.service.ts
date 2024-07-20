import { HttpClient }from '@angular/common/http';
import { Injectable } from '@angular/core';

class student{
  
  name!:string;
  id!:number;
  dept!:string;
  poy!:number;
  email!:string;  
  phone!:number;
}
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private hc:HttpClient) { }
  
  private endpoint = "http://localhost:3000/users";
   
  adduser(data:any)
  {
    return this.hc.post<student>(this.endpoint,data);

  }
  getAllUser()
  {
    return this.hc.get<student>(this.endpoint);
  }
  removeuser(id: number) {
    return this.hc.delete<student>(`${this.endpoint}/${id}`);
  }
  
  
  getSingleUser(id:number)
  {
    return this.hc.get<student>(`${this.endpoint}/${id}`);
  }
  updateUser(id:number,data:any)
  {
    return this.hc.put<student>(`${this.endpoint}/${id}`,data);
  }

  
}
