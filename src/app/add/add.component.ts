import { Component, Input } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() add: { name: string, id: number | string, dept: string, age: string, poy: string, email: string, phone: string } = {
    name: '',
    id: '',
    dept: '',
    age: '',
    poy: '',
    email: '',
    phone: ''
  };

  constructor(public cs: CrudServiceService, public rt: Router) {}

  addStudent() {
    this.cs.adduser(this.add).subscribe();
    this.rt.navigate(['list']);
  }
}
