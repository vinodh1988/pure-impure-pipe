import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [
    { name: "ahmed", age: 20 },
    { name: "hamza", age: 20 },
    { name: "manel", age: 20 },
    { name: "yosra", age: 20 },
    { name: "jihed", age: 20 },
    { name: "raja", age: 20 }
  ]
  
  data:string = "INDIA";
  something = "ASIA"
  searchTerm = ''
// no change in the state only  property of the user gets changed
// user not considered to be changed
  changeProperty() {
    this.users[0].name = "ghoul";
  }
// change in the state 
  changeReference() {
    // const refUsers= Object.assign([], this.users);
    // const refUsers= [...this.users];
    const refUsers = this.users.slice();
    refUsers[0].name = "ghoul";
    this.users = refUsers
    console.log(this.users)
  }

  toggle(){
      this.data = this.data=="INDIA"?"CHINA":"INDIA"
  }

  toggleSomething(){
    this.something = this.something=="ASIA"?"EUROPE":"ASIA"
  }
}
