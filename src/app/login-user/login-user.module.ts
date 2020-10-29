import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
const routes: Routes = [
  { path: '', component:LoginComponent },
 
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 2000
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class LoginUserModule { }
