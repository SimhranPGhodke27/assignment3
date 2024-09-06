import { Component } from '@angular/core';
import { GreetingService } from '../services/greeting.service';
@Component({
  selector: 'app-greet-button',
  standalone:true,
  imports: [],
  templateUrl: './greet-button.component.html',
  styleUrl: './greet-button.component.css'
})
export class GreetButtonComponent {
  message: string = '';

  constructor(private greetingService: GreetingService) {}

  showGreeting(): void {
    this.message = this.greetingService.getGreeting();
  }
}
