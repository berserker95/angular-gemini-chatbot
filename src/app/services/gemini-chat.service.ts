import { Injectable } from '@angular/core';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

import { environment } from '../../environments/environment';

interface GenerationConfig {
  safetySettings: SafetySetting[];
  temperature: number;
  top_p: number;
  top_k: number;
  maxOutputTokens: number;
}

interface SafetySetting {
  category: HarmCategory;
  threshold: HarmBlockThreshold;
}

@Injectable({
  providedIn: 'root'
})
export class GeminiChatService {
  private generativeAI: GoogleGenerativeAI;
  private generationConfig: GenerationConfig = {
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
      },
    ],
    temperature: 0.9,
    top_p: 1,
    top_k: 32,
    maxOutputTokens: 100,
  };
  constructor() {
    if (!environment.API_KEY) {
      throw new Error('API Key is not defined in the environment variables');
    }
    this.generativeAI = new GoogleGenerativeAI(environment.API_KEY);
  }

  async generateText(prompt: string): Promise<void> {
    try {
      const model = this.generativeAI.getGenerativeModel({
        model: 'gemini-pro',
        ...this.generationConfig,
      });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      window.alert(text);
    } catch (error) {
      console.error('Error generating text:', error);

    }
  }
}
