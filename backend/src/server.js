import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Import database and Groq config
import { connectDB } from './config/db.js';
import { validateGroqConfig } from './config/groq.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ============================================
// INITIALIZE CONFIGURATIONS
// ============================================

// Validate Groq API setup
try {
  validateGroqConfig();
} catch (error) {
  console.error('⚠️  Groq configuration error:', error.message);
  process.exit(1);
}

// Connect to MongoDB (will run when server starts)
connectDB().catch(error => {
  console.error('Failed to connect to MongoDB:', error.message);
  process.exit(1);
});

// ============================================
// MIDDLEWARE SETUP
// ============================================

// Security middleware - adds security headers
app.use(helmet());

// CORS - allow requests from React frontend
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true, // Allow cookies to be sent
}));

// Parse JSON and URL-encoded data
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Parse cookies
app.use(cookieParser());

// Request logging - log all HTTP requests
app.use(morgan('dev'));

// ============================================
// ROUTES (PLACEHOLDER)
// ============================================

// Health check route - useful for testing if server is running
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running!',
    timestamp: new Date().toISOString(),
  });
});

// Welcome route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to AI Chat Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      users: '/api/users',
      chats: '/api/chats',
      messages: '/api/messages',
    },
  });
});

// ============================================
// ERROR HANDLING
// ============================================

// 404 - Route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
});

// ============================================
// SERVER START
// ============================================

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║   AI Chat Backend Server Started! 🚀       ║
╚════════════════════════════════════════════╝

📍 Server URL: http://localhost:${PORT}
🌍 Environment: ${process.env.NODE_ENV || 'development'}
📅 Started: ${new Date().toLocaleString()}

✅ Integrations Ready:
  • Express.js Server
  • MongoDB Connection (via mongoose)
  • Groq AI API (via groq-sdk)
  • Authentication Middleware (preparing)
  • CORS enabled for frontend

Available Routes:
  • GET  /                 - Welcome & endpoints
  • GET  /api/health       - Health check

🔗 Frontend: ${process.env.CLIENT_URL || 'http://localhost:5173'}
🗄️  Database: MongoDB Atlas
🤖 AI Model: ${process.env.GROQ_MODEL || 'mixtral-8x7b-32768'}

Next Phase: Setting up authentication routes
  `);
});

export default app;
