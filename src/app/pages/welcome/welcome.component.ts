import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //for ngIf like directives
//import { CommonService } from '@/services/common.service';
import { GridComponent } from '@/components/grid/grid.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule,FormsModule,GridComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent{
  appear:boolean=false;

  constructor(){}

  myText = "Hi"; //Not allowed with Build!
  myInput: string = "Hi Gajen"; //ESLint !
  usr:any=null;
  users =[
    {userName:"Gajen",userAge:37},
    {userName:"Pirabu",userAge:36},
    {userName:"Ragu",userAge:25},
  ];

  switchAppear = ()=>{
    this.appear=!this.appear;
  };

}
