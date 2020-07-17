import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dash : any[]=[]
  title = 'Rodrigo Lopez Vazquez'

  constructor(protected dashService: UserService) { }

  ngOnInit(): void {
    this.dashService.getDash()
    .subscribe(
      (data)=> {
        this.dash=data['results']
      },
      (error)=>{
        console.error(error)
      }
    )
  }

}
