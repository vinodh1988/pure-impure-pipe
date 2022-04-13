import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  datanow:string=""
  constructor() { }

  getDataNow(now){
      this.datanow = this.datanow+ "-->"+ now;
      return this.datanow;  
  }
}
