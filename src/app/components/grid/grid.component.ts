import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-grid',
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() index: number=1;
  @Input() un:string=""
  @Input() ua:number=0
}
