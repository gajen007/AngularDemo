import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //for directives & pipes

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  myDate = new Date();

}
