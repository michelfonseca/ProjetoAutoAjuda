import { FullCalendarModule } from 'ng-fullcalendar';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FullCalendarModule
  ],
  declarations: [
    NgbdpregressbarBasicComponent,
    NgbdAccordionBasicComponent,
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdModalBasicComponent,
    CalendarioComponent
  ]
})
export class ComponentsModule {}
