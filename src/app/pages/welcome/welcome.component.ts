/*
Observables created by HttpClient may be subscribed any number of times and will make a new backend request for each subscription.
*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //for ngIf like directives
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-welcome',
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  appear:boolean=false;

  constructor(private common: CommonService){

  }

  ngOnInit = ()=>{
    alert("Ng OnInit by "+new Date(Date.now())); //Not Working
    this.common.http.get<any>('http://localhost:3000/sampleGet').subscribe(data => {
      // process the configuration.
    });
  }

  switchAppear = ()=>{
    this.appear=!this.appear;
  };

  ngOnChanges = ()=>{
    console.log("Changed"); //Not working When DOM changes
  }

}
