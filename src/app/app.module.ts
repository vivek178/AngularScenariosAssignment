import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScenariofourModule } from './scenariofour/scenariofour.module';
import { ScenariothreeModule } from './scenariothree/scenariothree.module';
import { ScenariooneModule } from './scenarioone/scenarioone.module';
import { ScenariotwoModule } from './scenariotwo/scenariotwo.module';
import { ScenariofiveModule } from './scenariofive/scenariofive.module';
import { ScenariosixModule } from './scenariosix/scenariosix.module';
import { BindingServiceService } from './scenarioseven/binding-service.service';
import { ScenariosevenModule } from './scenarioseven/scenarioseven.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScenariofourModule,
    ScenariothreeModule,
    ScenariooneModule,
    ScenariotwoModule,
    ScenariofiveModule,
    ScenariosixModule,
    ScenariosevenModule
  ],
  providers: [BindingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
