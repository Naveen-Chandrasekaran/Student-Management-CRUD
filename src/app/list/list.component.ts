import { Component } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  ulist:any=[];
  
  constructor(public cs:CrudServiceService){}

  ngOnInit(){
    this.fetchAllUsers();
  }
  fetchAllUsers() {
    this.cs.getAllUser().subscribe(
      (res) => {
        console.log('Response:', res);
        this.ulist = res;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  
  delStudent(sid: number) {
    if (confirm("Are you sure want to delete this?")) {
      this.cs.removeuser(sid).subscribe(
        () => {
          // Success callback if needed
          this.fetchAllUsers();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
  
  

}
