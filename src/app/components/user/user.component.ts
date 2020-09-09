import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private _userService: UserService, private router:Router) { }

  ngOnInit(): void {

    this._userService.getAllUsers()
    .subscribe(data => {
        this.users = data;
      });
  }

  addUser(){
    this.router.navigate(['add-user']);
  }
  getAllUsersFun() 
  {
    this._userService.getAllUsers().subscribe(data => { this.users = data });
  }
}