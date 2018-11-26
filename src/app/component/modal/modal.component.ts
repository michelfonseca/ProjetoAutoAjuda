import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VgAPI } from '../../../../node_modules/videogular2/core';

@Component({
  selector: 'app-ngbd-modal',
  templateUrl: './modal.component.html',
})
export class NgbdModalBasicComponent {
  preload:string = 'auto';
    api:VgAPI;

    constructor() {}

    onPlayerReady(api:VgAPI) {
      this.api = api;
  
      this.api.getDefaultMedia().subscriptions.ended.subscribe(
          () => {
              // Set the video to the beginning
              this.api.getDefaultMedia().currentTime = 0;
          }
      );
  }
}
