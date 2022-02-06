import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';
import { DepartmentComponent } from './department/department.component';
import { DynamicDirective } from './department/dynamic.directive';


@NgModule({
  declarations: [
    ProtectedComponent,
    DepartmentComponent,
    DynamicDirective
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
