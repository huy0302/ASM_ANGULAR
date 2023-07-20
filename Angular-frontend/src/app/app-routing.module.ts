import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ListWorkEmployeeComponent } from './components/list-work-employee/list-work-employee.component';
import { MemberAdminComponent } from './components/member-admin/member-admin.component';
import { ProjectAdminComponent } from './components/project-admin/project-admin.component';
import { AuthGuard } from './guard/auth.guard';
import { AddMemberComponent } from './modules/add-member/add-member.component';
import { AddProjectComponent } from './modules/add-project/add-project.component';
import { AddTaskComponent } from './modules/add-task/add-task.component';
import { EditProjectComponent } from './modules/edit-project/edit-project.component';
import { ProductlistComponent } from './modules/productlist/productlist.component';
import { SigninComponent } from './modules/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'signin',
    pathMatch:'full'
  },
  {
    path: 'products',
    component: ProductlistComponent
    ,
    canActivate: [AuthGuard]
  },
  {
    path: 'member',
    component: MemberAdminComponent
  },
  {
    path: 'project',
    component: ProjectAdminComponent
  },
  {
    path: 'task',
    component: ListWorkEmployeeComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'member/add',
    component: AddMemberComponent
  },
  {
    path: 'project/add',
    component: AddProjectComponent
  },
  {
    path: 'project/edit/:id',
    component: EditProjectComponent
  },
  {
    path: 'task/add',
    component: AddTaskComponent
  },
  {path: 'task/edit/:id', component: EditTaskComponent},
  {path: 'signup', component: SignupComponent},
  {path: "project/:id",component: DetailProjectComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
