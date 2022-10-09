import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'schedule-class',
  templateUrl: './schedule-class.component.html',
  styleUrls: ['./schedule-class.component.css']
})
export class ScheduleClassComponent implements OnInit {

  ejeX = ['Hora', 'Lunes', 'Martes', 'Miercoles','Jueves', 'Viernes'];
  ejeY = ['08:10','09:00','10:00','11:00','12:00','13:00'];
  horarios = [];
  constructor() { }


  ngOnInit(): void {
    this.horarios = [
      {
        x:'Viernes',
        y:'10:00',
        col:1,
        info:'K V-10'
      },
      {
        x:'Lunes',
        y:'11:00',
        col:1,
        info:'Física L-11'
      },
      {
        x:'Lunes',
        y:'08:10',
        col:1,
        info:'Tutoría L-08:10 '
      },
      {
        x:'Miercoles',
        y:'11:00',
        col:2,
        info:'Inglés M-11'
      },
      {
        x:'Jueves',
        y:'09:00',
        col:2,
        info:'Comunicación J-9:00'
      }
    ];
  }

}
