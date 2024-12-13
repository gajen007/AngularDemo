import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-chat-container',
  imports: [CommonModule],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.css'
})
export class ChatContainerComponent {
  messages: any=[];
  constructor(private common: CommonService) {
    this.common.serviceData$.subscribe( d => {
       this.messages.push({msg:d});
  })
  }
}
