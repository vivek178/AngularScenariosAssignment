import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildfourComponent } from './childfour/childfour.component';
import { ParentfourComponent } from './parentfour/parentfour.component';

@NgModule({
  declarations: [ChildfourComponent, ParentfourComponent],
  imports: [
    CommonModule
  ],
  exports: [ChildfourComponent, ParentfourComponent]
})
export class ScenariofourModule { }
