import { GoogleGenerativeAI } from '@google/generative-ai';
import { sanitizeGeminiResponse } from './sanitizer';
import { PROMPTS } from './prompts';
import { config, validateConfig } from '../config';

// Initialize the Gemini AI client
let genAI;
try {
  validateConfig();
  genAI = new GoogleGenerativeAI(config.geminiApiKey);
} catch (error) {
  console.error('Failed to initialize Gemini AI:', error);
}

export async function generateHooks(description, preferredScore = null) {
  if (!genAI) {
    throw new Error('Gemini AI client is not properly initialized');
  }

  if (!description?.trim()) {
    throw new Error('Description is required');
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = PROMPTS.GENERATE_HOOKS(description, preferredScore);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error('Empty response from Gemini API');
    }

    const parsedResponse = sanitizeGeminiResponse(text);
    
    if (!parsedResponse.hooks || !Array.isArray(parsedResponse.hooks) || parsedResponse.hooks.length === 0) {
      throw new Error('Invalid response format from AI');
    }

    return parsedResponse;
  } catch (error) {
    console.error('Error generating hooks:', error);
    throw new Error(
      error.message === 'Description is required' 
        ? error.message 
        : 'Failed to generate hooks. Please try again.'
    );
  }
}