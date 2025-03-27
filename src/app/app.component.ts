import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './services/common.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDemo';
  constructor(public common: CommonService){

  }
}
