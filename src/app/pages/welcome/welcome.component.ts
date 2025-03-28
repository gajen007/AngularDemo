import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //for ngIf like directives
import { GridComponent } from '@/components/grid/grid.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
@Component({
  selector: 'app-welcome',
  imports: [CommonModule,FormsModule,GridComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  //myDate = new Date();

  userNameInput:string="";
  userAgeInput:number=0;
  users:any = [];

  constructor(private httpObj:HttpClient){}
  
  getUsers() : void {
    this.users = [];
    this.httpObj.get("http://localhost:3000/getUsers")
    .pipe(map((res: any)=>res)).subscribe((data: any) => {
      Array.isArray(data) && data.map((d) => {
        this.users.push(d);
      });
    });
  }

  addUser(): void {
    const fd={uN:this.userNameInput,uA:this.userAgeInput};
    const h = new HttpHeaders({ 'Content-Type': 'application/json' }); // Corrected header
      this.httpObj.post("http://localhost:3000/addUser",fd,{headers:h}).subscribe(data => {
        this.getUsers();
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
