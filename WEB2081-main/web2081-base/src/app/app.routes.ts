import { Routes } from '@angular/router';
import { ListComponent } from './page/list/list.component';
import { AddComponent } from './page/add/add.component';
import { EditComponent } from './page/edit/edit.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';



export const routes: Routes = [
{path:'nike',component:ListComponent},
{path:'nike/add',component:AddComponent},
{path:'nike/edit/:id',component:EditComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
];
