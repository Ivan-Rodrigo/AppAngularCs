import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios : any[]=[]
  title = 'Rodrigo Lopez Vazquez'

  constructor(protected usuService: UserService) { }

  ngOnInit(): void {
    this.usuService.getDash()
    .subscribe(
      (data)=> {
        this.usuarios=data['results']
      },
      (error)=>{
        console.error(error)
      }
    )
  }

}
