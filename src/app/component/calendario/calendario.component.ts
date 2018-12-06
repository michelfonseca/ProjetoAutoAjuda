import { Options } from 'fullcalendar';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  calendarOptions: Options;
  localeCode = 'pt-BR';

  ngOnInit() {
  this.calendarOptions = {
        defaultView: 'month',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay',
        },
        footer: {
          right: 'addEventButton'
        },
        customButtons: {
          addEventButton: {
            text: 'Agendar consulta',
            click: function() {
              var dateStr = prompt('Enter a date in YYYY-MM-DD format');
              var date = moment(dateStr);
  
              if (date.isValid()) {
                this.calendarOptions('renderEvent', {
                  title: 'dynamic event',
                  start: date,
                  allDay: true
                });
                alert('Great. Now, update your database...');
              } else {
                alert('Invalid date.');
              }
            }
          }
        },
        locale: this.localeCode,
        buttonIcons: true,
        weekNumbers: false,
        navLinks: true,
        editable: true,
        eventLimit: true,
      };
  }
}