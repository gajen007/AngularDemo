import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //for ngIf like directives
import { GridComponent } from '@/components/grid/grid.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { CommonService } from '@/services/common.service';

@Component({
  selector: 'app-userdata',
  imports: [CommonModule,FormsModule,GridComponent],
  templateUrl: './userdata.component.html',
  styleUrl: './userdata.component.css'
})
export class UserdataComponent {
  userNameInput:string="";
  userAgeInput:number=0;
  users:any = [];

  constructor(private httpObj:HttpClient, private common: CommonService){}
  
  getUsers() : void {
    this.users = [];
    this.httpObj.get(this.common.apiEndPoint+"getUsers")
    .pipe(map((res: any)=>res)).subscribe((data: any) => {
      Array.isArray(data) && data.map((d) => {
        this.users.push(d);
      });
    });
  }

  addUser(): void {
    const fd={uN:this.userNameInput,uA:this.userAgeInput};
    const h = new HttpHeaders({ 'Content-Type': 'application/json' }); // Corrected header
      this.httpObj.post(this.common.apiEndPoint+"addUser",fd,{headers:h}).subscribe(data => {
        this.getUsers();
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
