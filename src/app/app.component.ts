import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatContainerComponent } from "./chat-container/chat-container.component";
import { SendChatFormComponent } from "./send-chat-form/send-chat-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatContainerComponent, SendChatFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDemo';
}