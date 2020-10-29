import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = [
    { 'email': 'admin@gmail.com', 'password': '1234' }
  ]
  public emaill: any;
  public pass: any;
  constructor(private router: Router, private spinner: NgxSpinnerService, public toast: ToastrService) { }

  ngOnInit(): void {
  }
  // Login function Start
  login() {
    let emails = $('#emaill').val();
    let passwords = $('#pass').val();
    if (emails == this.user[0].email && passwords == this.user[0].password) {
      this.toast.success('Login Successfully');
      this.router.navigate(['/data']);
    }
    else {
      if (emails != this.user[0].email && passwords != this.user[0].password) {
        this.toast.error('Email and Password is Incorrect');
      }
      else if (emails != this.user[0].email) {
        this.toast.error('Email is Incorrect');
      }
      else if (passwords != this.user[0].password) {
        this.toast.error('Password is Incorrect');
      }
    }
  }
   // Login function Start
}

