import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from 'app/shared/services/notify/notify.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private notifyService: NotifyService,
  ) { 

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      user: [null  ],
      password: [null ]
    });
  }

  get formBuilderInformation(){
    return this.formLogin;
  }

  sendLogin() {
    
    const user = this.formBuilderInformation.get('user').value ;
    const password = this.formBuilderInformation.get('password').value ;

    if( !user || !password){
      this.notifyService.showNotify( {
        direction:{
          from:'top',
          align: 'right',
        } ,
        message: 'Error!, por favor <b>ingrese</b> sus credenciales.',
        type: 'danger'
      }, 200 , 'notifications' );

      return;
    }

    const userInvalid = this.formBuilderInformation.get('user').invalid;
    const passwordInvalid = this.formBuilderInformation.get('password').invalid;

    if( userInvalid || passwordInvalid){
      this.notifyService.showNotify( {
        direction:{
          from:'top',
          align: 'right',
        } ,
        message:  'Error!, por favor <b>ingrese</b> credenciales correctas .',
        type: 'danger'
      }, 200 , 'notifications' );

      return;
    }

    this.router.navigateByUrl('/sist/icons');
    
  }


}
