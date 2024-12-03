/**
 * Application configuration
 */
export const config = {
  geminiApiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  isProduction: process.env.NODE_ENV === 'production'
};

export function validateConfig() {
  if (!config.geminiApiKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_GEMINI_API_KEY environment variable. ' +
      'Please add it to your .env.local file.'
    );
  }
}