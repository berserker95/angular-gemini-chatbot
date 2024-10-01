import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { GeminiChatService } from '../../services/gemini-chat.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchControl = new FormControl('');
  geminiChatService: GeminiChatService = inject(GeminiChatService);

  onSearch(): void {
    const trimmedQuery = this.searchControl.value?.trim();
    if (trimmedQuery) {
      this.geminiChatService.generateText(trimmedQuery);
    }
  }
}
