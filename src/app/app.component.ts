import { Component } from '@angular/core';

import { SearchBarComponent } from "./shared/search-bar/search-bar.component";
import { ResponseDisplayComponent } from "./components/response-display/response-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchBarComponent, ResponseDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-gemini-chatbot';

}
