
import { Routes } from '@angular/router';

import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { CalendarioComponent } from './calendario/calendario.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'progressbar',
        component: NgbdpregressbarBasicComponent,
        data: {
        }
      },
      {
        path: 'accordion',
        component: NgbdAccordionBasicComponent,
        data: {
        }
      },
      {
        path: 'alert',
        component: NgbdAlertBasicComponent,
        data: {
        }
      },
      {
        path: 'carousel',
        component: NgbdCarouselBasicComponent,
        data: {
        }
      },
      {
        path: 'modal',
        component: NgbdModalBasicComponent,
        data: {
        }
      },
      {
        path: 'calendario',
        component: CalendarioComponent,
        data: {
          
        }
      }
    ]
  }
];
