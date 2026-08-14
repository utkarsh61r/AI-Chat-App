import Groq from 'groq-sdk';

/**
 * PHASE 4: Groq Client Setup
 * 
 * This file initializes the Groq API client.
 * 
 * IMPORTANT SECURITY:
 * ===================
 * The GROQ_API_KEY should NEVER be exposed to:
 * - React Frontend
 * - Browser Console
 * - GitHub
 * 
 * The key stays ONLY in:
 * - .env file (backend only)
 * - This config file (backend only)
 * - Memory of running backend server
 * 
 * Architecture:
 * =============
 * React Frontend
 *      ↓ (sends message text)
 *  POST /api/messages
 *      ↓
 *  Express Backend (SAFE)
 *      ↓ (has GROQ_API_KEY)
 *  Groq API
 *      ↓ (returns AI response)
 *  Express Backend
 *      ↓ (sends only response text)
 *  React Frontend (displays response)
 * 
 * Frontend NEVER sees the API key! ✅
 */

/**
 * Initialize Groq Client
 * 
 * The client is created once and reused for all API calls
 * This is more efficient than creating new clients for each request
 */
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/**
 * Validate Groq Configuration
 * 
 * Run this check when server starts to ensure:
 * 1. API key is provided
 * 2. Model name is provided
 * 3. Groq client is properly initialized
 */
export const validateGroqConfig = () => {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL;

  if (!apiKey) {
    throw new Error(
      'GROQ_API_KEY is not defined in .env file. ' +
      'Please get an API key from https://console.groq.com'
    );
  }

  if (!model) {
    throw new Error(
      'GROQ_MODEL is not defined in .env file. ' +
      'Example: GROQ_MODEL=mixtral-8x7b-32768'
    );
  }

  console.log(`
╔════════════════════════════════════════════╗
║   Groq API Configured Successfully! 🤖     ║
╚════════════════════════════════════════════╝

🔑 API Key: ${apiKey.slice(0, 8)}...${apiKey.slice(-4)} (hidden for security)
📊 Model: ${model}
🔗 Status: READY

⚠️  Remember:
  • This API key is ONLY in the backend
  • Frontend will communicate with your Express server
  • Your server will call Groq API securely
  • User will never see the API key ✅

  `);
};

/**
 * Get Groq Client
 * 
 * Export the configured Groq client for use in other files
 * 
 * Usage in controllers:
 * =====================
 * import groq from './config/groq.js';
 * 
 * const message = await groq.chat.completions.create({
 *   model: process.env.GROQ_MODEL,
 *   messages: [{ role: 'user', content: 'Hello!' }],
 *   temperature: 0.7,
 *   max_tokens: 1024,
 * });
 */
export default groq;
