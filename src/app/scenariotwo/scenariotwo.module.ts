import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasktwoComponent } from "./tasktwo/tasktwo.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasktwoComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [TasktwoComponent]
})
export class ScenariotwoModule { }
