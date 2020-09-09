import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUser:FormGroup

  constructor(private formBuilder:FormBuilder,private service:UserService) { }

  ngOnInit(): void {
    this.addUser=this.formBuilder.group({
      id:[],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
  }

  onSubmit(obj:User)
  {
    console.log(obj);
    this.service.addUser(obj).subscribe(data=>{
    console.log(data) 
    alert("User Added");})
  }

}
