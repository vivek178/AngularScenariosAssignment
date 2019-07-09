import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftchildServComponent } from './leftchild-serv/leftchild-serv.component';
import { RightchildServComponent } from './rightchild-serv/rightchild-serv.component';

@NgModule({
  declarations: [LeftchildServComponent, RightchildServComponent],
  imports: [
    CommonModule
  ],
  exports: [LeftchildServComponent, RightchildServComponent]
})
export class ScenariosevenModule { }
