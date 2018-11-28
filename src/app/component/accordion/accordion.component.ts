import { Component } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from '../../../../node_modules/rxjs';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';

@Component({
  selector: 'app-ngbd-accordion-basic',
  templateUrl: 'accordion.component.html'
})
export class NgbdAccordionBasicComponent {

  model: any = {};

  itemValue = '';
  items: Observable<any[]>;
 
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
 
  onSubmit() {
    this.db.list('/items').push({ content: this.itemValue });
    this.itemValue = '';
  }
}