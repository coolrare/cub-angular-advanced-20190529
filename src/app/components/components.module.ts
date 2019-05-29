import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CardsComponent } from './cards/cards.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [CardsComponent, ButtonsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
