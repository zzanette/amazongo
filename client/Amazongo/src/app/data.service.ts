import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Injectable()
export class DataService {
  message = '';
  messageType = 'danger';


  constructor() { }

}
