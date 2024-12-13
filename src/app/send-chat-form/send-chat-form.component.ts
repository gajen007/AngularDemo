import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-send-chat-form',
  imports: [FormsModule],
  templateUrl: './send-chat-form.component.html',
  styleUrl: './send-chat-form.component.css'
})
export class SendChatFormComponent {
  textInput: string = '';
  @Output() toParent = new EventEmitter<string>();
  sendChat(event: any) {
    this.toParent.emit(this.textInput)
  }
}