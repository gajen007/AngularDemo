import { Component } from '@angular/core';
import { HighlightDirective } from '@/directives/highlight.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [CommonModule,HighlightDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

}
