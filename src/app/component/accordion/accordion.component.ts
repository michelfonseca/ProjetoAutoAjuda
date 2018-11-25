import { Component } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-accordion-basic',
  templateUrl: 'accordion.component.html'
})
export class NgbdAccordionBasicComponent {

  nrSelect:string = "47" 

  model: any = {};

  onSubmit() {
    alert('Sucesso!! :-)\n\n' + JSON.stringify(this.model))
  }
}