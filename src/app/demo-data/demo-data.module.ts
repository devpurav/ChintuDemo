import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyDataComponent } from './dummy-data/dummy-data.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';


const routes: Routes = [
  { path: '', component:DummyDataComponent },
 
];
@NgModule({
  declarations: [DummyDataComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 2000
    }
    )
  ],
  
  exports: [RouterModule,DummyDataComponent]
})
export class DemoDataModule { }
