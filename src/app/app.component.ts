import { Component } from '@angular/core';
import { ParentUser } from './parent-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MN3';


  users: ParentUser[] = [
    { 
      id: 1, 
      firstname: 'jora',
      lastname: 'kamkamidze', 
      dateOfBirth: '12/12/56',
      phoneNumber: '555 490 210', 
      email: 'jora@gmail.com' 
      },
      { 
       id: 2,
      firstname: 'manana',
      lastname: 'kamkamidze', 
      dateOfBirth: '12/10/73',
      phoneNumber: '555 789 210', 
      email: 'manana@gmail.com' 
  },
    
  ];
}
