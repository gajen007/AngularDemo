import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-onchanges',
  imports: [ChildComponent,FormsModule],
  templateUrl: './onchanges.component.html',
  styleUrl: './onchanges.component.css'
})
export class OnchangesComponent {
  parentInput:string="";

}

