import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:'',component:ListComponent
  },
  {
    path:'add',component:AddComponent
  },
  {
    path:'edit/:id',component:EditComponent
  },
  {
    path:'list',component:ListComponent
  },
  {
    path:'**',component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
