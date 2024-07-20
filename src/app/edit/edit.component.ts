import { Component } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(public cs:CrudServiceService,public act:ActivatedRoute,public rt:Router){ }

  [x: string]:any;
  ulist:any=[];
  sid:number=this.act.snapshot.params['id'];
  

  ngOnInit(){
    this.fetchsingleuser(this.sid);
  }
  fetchsingleuser(uid:number){
    this.cs.getSingleUser(uid).subscribe(res=>{this.ulist=res;})
  }
  Update(sid:number,info:any){
    if(confirm("Are you sure want to update this ? ")){
      this.cs.updateUser(sid,info).subscribe();
      this.rt.navigate(['list'])
    }
  }

}
