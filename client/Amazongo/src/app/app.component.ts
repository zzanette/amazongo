import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  searchTerm = '';
  isCollpased = true;

  constructor(private router: Route, private dataService: DataService) {
    
  }

  get token() {
    return localStorage.getItem('token');
  }

  collapse() {
    this.isCollpased = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
  //  this.dataService.user = {};
    localStorage.clear();
    //this.router.redirectTo('Home');
  
  }

  search() {}
}
