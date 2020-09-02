import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './Component/Layout/data/data.component';
import { NewPersonComponent } from './Component/new-person/new-person.component';
import { OuthGuard } from './Guard/outh.guard';
import { BranchComponent } from './Component/branch/branch.component';



const routes: Routes =
  [
    { path: 'Home', component: DataComponent },
    { path: 'ADD', component: NewPersonComponent, canActivate: [OuthGuard] },
    { path: 'Branch', component: BranchComponent ,canActivate: [OuthGuard] },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'User',loadChildren: () => import('./Component/user/user.module').then(m => m.UserModule)
    }
    //{path:'**' ,component:NotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
