import { Component, Input, OnInit } from '@angular/core';
import { ParentUser } from 'src/app/parent-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

  export class UsersComponent {
    @Input() users: ParentUser[] = [];

  }


