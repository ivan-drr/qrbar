import { Injectable } from '@angular/core';
import JSONdata from '..//carta-bar-ejemplo.json';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private data: Object;

  constructor() {
    this.data = JSONdata;
  }

  getData(): Object {
    return this.data;
  }
}
