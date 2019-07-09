import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [FirstComponent, SecondComponent, ThirdComponent],
  imports: [
    CommonModule
  ],
  exports: [FirstComponent, SecondComponent, ThirdComponent]
})
export class ScenariofiveModule { }
