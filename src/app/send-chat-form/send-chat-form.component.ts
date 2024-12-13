import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-send-chat-form',
  imports: [FormsModule],
  templateUrl: './send-chat-form.component.html',
  styleUrl: './send-chat-form.component.css'
})
export class SendChatFormComponent {
  constructor(private common: CommonService){

  }

  textInput: string = '';
  sendChat(event: any) {
    this.common.update(this.textInput);
    this.textInput = '';
  }
}