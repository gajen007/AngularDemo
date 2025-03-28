import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {
  @Input() receiver:string="";

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['receiver']){
        console.log(changes['receiver']);
      }
  }
}
