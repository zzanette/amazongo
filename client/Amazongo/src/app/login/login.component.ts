import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private router: Router, private dataService: DataService, private restApi: RestApiService) { }

  validate() {
    if (this.username) {
      if (this.password) {
        return true;
      } else {
        this.dataService.error('error');
      }
    } else {
      this.dataService.error('error');
    }
  }

  async login() {
    try {
      if (this.validate) {
        const data = this.restApi.post(
          '',
          {

          }
        );
      }
    } catch (error) {
      
    }
  }

  ngOnInit() {
  }

}
