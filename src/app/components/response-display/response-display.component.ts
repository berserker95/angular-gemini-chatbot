import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

import { GeminiChatService } from '../../services/gemini-chat.service';

@Component({
  selector: 'app-response-display',
  standalone: true,
  imports: [CommonModule, SkeletonModule],
  templateUrl: './response-display.component.html',
  styleUrl: './response-display.component.css'
})
export class ResponseDisplayComponent implements OnInit {
  generatedResponse: string = '';
  isLoading: boolean = false;
  constructor(private geminiChatService: GeminiChatService) { }

  ngOnInit(): void {
    this.geminiChatService.loading$.subscribe((loading: boolean) => {
      this.isLoading = loading
    });
    this.geminiChatService.generatedText$.subscribe((response: string) => {
      this.generatedResponse = response;
    })
  }
}
