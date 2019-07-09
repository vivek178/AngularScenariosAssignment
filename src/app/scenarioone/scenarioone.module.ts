import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskoneComponent } from './taskone/taskone.component';

@NgModule({
  declarations: [TaskoneComponent],
  imports: [
    CommonModule
  ],
  exports: [TaskoneComponent]
})
export class ScenariooneModule { }
