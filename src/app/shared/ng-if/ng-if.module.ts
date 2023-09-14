import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIfDirective } from './ng-if.directive';



@NgModule({
  declarations: [
    NgIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgIfDirective
  ]
})
export class NgIfModule { }
