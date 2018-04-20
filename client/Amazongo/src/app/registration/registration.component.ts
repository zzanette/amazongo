import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  

  name = '';
  email = '';
  password = '';
  password2 = '';
  isSeller = false;

  btnDisable = false;


  constructor(private router: Router, private dataService: DataService, private restApi: RestApiService) { }

  validate() {
    
    if (this.name) {
      if (this.email) {
        if (this.password) {
          if (this.password2) {
            if (this.password == this.password2) {
              return true;
            } else {
              this.dataService.error("Password doesnt match.");
            }
          } else {
            this.dataService.error("Enter with pass 2.");
          }
        } else {
          this.dataService.error("Enter with pass.");
        }
      } else {
        this.dataService.error("Enter with e-mail.");
      }
    } else {
      this.dataService.error("Enter with name.");
    }

    return false;
  }

  async register() {
    this.btnDisable = true;

    try {
      const data = await this.restApi.post(
        environment.urlServer + 'account/singup',
        {
          name: this.name,
          email: this.email,
          password: this.password,
          isSeller: this.isSeller
        }
      );

      if (data['success']) {
        this.dataService.error('Registration Sucess!!')
      } else {
        this.dataService.error(data['message']);
      }
    } catch (error) {
        this.dataService.error(error['message']);
    }
  }

  ngOnInit() {
  }

}
