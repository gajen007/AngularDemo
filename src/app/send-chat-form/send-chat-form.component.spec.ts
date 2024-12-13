import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendChatFormComponent } from './send-chat-form.component';

describe('SendChatFormComponent', () => {
  let component: SendChatFormComponent;
  let fixture: ComponentFixture<SendChatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendChatFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendChatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
