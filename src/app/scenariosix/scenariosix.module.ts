import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildleftComponent } from './childleft/childleft.component';
import { ChildrightComponent } from './childright/childright.component';
import { ScenariosixParentComponent } from './scenariosix-parent/scenariosix-parent.component';

@NgModule({
  declarations: [ChildleftComponent, ChildrightComponent, ScenariosixParentComponent],
  imports: [
    CommonModule
  ],
  exports: [ChildleftComponent, ChildrightComponent,ScenariosixParentComponent]
})
export class ScenariosixModule { }
