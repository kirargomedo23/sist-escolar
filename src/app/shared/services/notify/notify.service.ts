import { Injectable } from '@angular/core';
import { NotifyI } from 'app/interfaces/notify/notify.interface';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(

  ) {

  }


  public showNotify( notifyObj : NotifyI , timer: number, icon: string = 'notifications' ){
    $.notify({
      icon: icon,
      message: notifyObj.message
      },{
          type: notifyObj.type ,
          timer: timer,
          placement: {
              from: notifyObj.direction.from,
              align: notifyObj.direction.align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }
}
