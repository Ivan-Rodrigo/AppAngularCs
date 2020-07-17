import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any[]=[]
  title = 'Rodrigo Lopez Vazquez'


  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
    .subscribe(
      (data)=> {
        this.user=data['results']
      },
      (error)=>{
        console.error(error)
      }
    )
  }

}
