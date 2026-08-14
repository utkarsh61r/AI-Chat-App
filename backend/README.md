# AI Chat Backend - Complete Setup Guide

## 🎯 Project Overview

Building a complete **MERN** (MongoDB, Express, React, Node.js) backend for an AI Chat Application using **Groq API** for AI responses.

**Tech Stack:**
- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **AI API:** Groq SDK (NOT xAI Grok)
- **Authentication:** JWT + bcryptjs
- **Frontend Communication:** REST API with CORS

---

## 📁 Backend Folder Structure

```
backend/
├── src/
│   ├── config/           # Configuration files
│   │   ├── db.js        # MongoDB connection
│   │   └── groq.js      # Groq API client
│   │
│   ├── controllers/      # Business logic (coming Phase 6+)
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── chatController.js
│   │   └── messageController.js
│   │
│   ├── models/          # Database schemas (coming Phase 5)
│   │   ├── User.js
│   │   ├── Chat.js
│   │   └── Message.js
│   │
│   ├── routes/          # API endpoints (coming Phase 6+)
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── chatRoutes.js
│   │   └── messageRoutes.js
│   │
│   ├── middleware/      # Request handlers (coming Phase 6+)
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── notFoundMiddleware.js
│   │
│   ├── services/        # AI & business logic (coming Phase 8)
│   │   └── aiService.js
│   │
│   ├── validators/      # Input validation (coming Phase 5+)
│   │   ├── authValidator.js
│   │   └── chatValidator.js
│   │
│   ├── utils/           # Helper functions (coming Phase 6+)
│   │   ├── generateToken.js
│   │   └── apiResponse.js
│   │
│   └── server.js        # Main application file
│
├── .env                 # Your secret credentials (YOU CREATE THIS)
├── .env.example         # Template for .env
├── .gitignore           # Don't commit node_modules & .env
├── package.json         # Dependencies & scripts
├── SETUP.md            # Phase 1 explanation
├── PHASE_2_ENV_SETUP.md # Environment variables guide
├── CREDENTIALS_GUIDE.md # How to get MongoDB & Groq keys
├── PHASES_2_3_4_SUMMARY.md # Complete setup overview
└── README.md           # This file
```

---

## 🚀 Quick Start (5 Steps)

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Create .env File
```bash
cp .env.example .env
```

### Step 3: Get Credentials
1. **MongoDB:** https://www.mongodb.com/cloud/atlas (free tier)
2. **Groq API:** https://console.groq.com (free tier)
3. **JWT Secret:** Run `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

See `CREDENTIALS_GUIDE.md` for detailed instructions.

### Step 4: Fill .env File
```
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/ai-chat-db?retryWrites=true&w=majority
JWT_SECRET=your_generated_32_char_secret_here
JWT_EXPIRES_IN=7d

GROQ_API_KEY=gsk_your_groq_api_key_here
GROQ_MODEL=mixtral-8x7b-32768
```

### Step 5: Start Server
```bash
npm run dev
```

✅ Server running at `http://localhost:5000`

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `SETUP.md` | Phase 1 - Express.js setup explanation |
| `PHASE_2_ENV_SETUP.md` | Detailed .env configuration |
| `CREDENTIALS_GUIDE.md` | Step-by-step to get MongoDB & Groq keys |
| `PHASES_2_3_4_SUMMARY.md` | Complete connection flow overview |
| `README.md` | This file (general overview) |

---

## 🔐 Security Best Practices

### DO ✅
- ✅ Keep `.env` in `.gitignore`
- ✅ Use strong random JWT_SECRET
- ✅ Never commit `.env` to GitHub
- ✅ Use different keys for dev vs production
- ✅ Rotate keys regularly
- ✅ GROQ_API_KEY stays ONLY in backend

### DON'T ❌
- ❌ Hardcode secrets in code
- ❌ Commit `.env` to version control
- ❌ Share `.env` files via email/Slack
- ❌ Expose GROQ_API_KEY to React frontend
- ❌ Use same secrets in production
- ❌ Push API keys to GitHub

---

## 🔄 Architecture: Secure Request Flow

```
React Frontend                           Express Backend
     │                                        │
     │ 1. User types: "Hello AI"              │
     ├──── POST /api/messages ───────────────→│
     │    (message text only)                 │
     │                                        │
     │                                  2. Authenticate
     │                                     (JWT check)
     │                                        │
     │                                  3. Get user ID
     │                                     from token
     │                                        │
     │                                  4. Call Groq API
     │                                  (has GROQ_API_KEY)
     │                                        │
     │                                  5. Get AI response
     │                                        │
     │                                  6. Save to MongoDB
     │                                  (User + message
     │                                   + response)
     │                                        │
     │←─────── JSON Response ────────────────│
     │    (AI response text only)             │
     │    (NO API KEYS!)                      │
     │                                        │
     └─ Display in chat                       │
```

**Key Point:** API keys NEVER leave the backend! ✅

---

## 📊 Development Phases

### ✅ Completed Phases

#### Phase 1: Node.js + Express Setup
- Created express server
- Setup middleware (CORS, security, logging)
- Added health check endpoint

#### Phase 2: Environment Variables
- Created .env.example template
- Documented all configuration options
- Added .gitignore for security

#### Phase 3: MongoDB Connection
- Created db.js config file
- Setup Mongoose connection
- Added error handling & connection status

#### Phase 4: Groq Client Setup
- Created groq.js config file
- Initialized Groq SDK
- Added API validation

### 🔜 Upcoming Phases

#### Phase 5: Database Models
- User model (authentication & profile)
- Chat model (conversation container)
- Message model (individual messages)

#### Phase 6: Authentication
- User registration (POST /api/auth/register)
- User login (POST /api/auth/login)
- JWT token generation
- Password hashing with bcryptjs
- Protected routes middleware

#### Phase 7: Chat & Message APIs
- Create chat (POST /api/chats)
- Get all chats (GET /api/chats)
- Get single chat (GET /api/chats/:id)
- Get chat messages (GET /api/chats/:id/messages)
- Send message (POST /api/chats/:id/messages)
- Delete chat (DELETE /api/chats/:id)

#### Phase 8: AI Service
- Send message to Groq API
- Manage conversation history
- Stream responses
- Error handling
- Rate limiting

---

## 🧪 Testing

After setup, test each component:

### 1. Server Running
```bash
curl http://localhost:5000/api/health
```

Expected: `{"success": true, "message": "Server is running!"}`

### 2. MongoDB Connection
Check console logs for:
```
╔════════════════════════════════════════════╗
║   MongoDB Connected Successfully! 🗄️        ║
╚════════════════════════════════════════════╝
```

### 3. Groq API Configuration
Check console for:
```
╔════════════════════════════════════════════╗
║   Groq API Configured Successfully! 🤖     ║
╚════════════════════════════════════════════╝
```

---

## 🐛 Troubleshooting

### MongoDB Connection Failed
**Check:**
- MONGO_URI is correct in .env
- MongoDB Atlas cluster is running
- IP address whitelisted in Atlas
- Network connection is active

**Fix:** See `PHASE_2_ENV_SETUP.md` → Troubleshooting

### Groq API Error
**Check:**
- GROQ_API_KEY is set in .env
- API key is valid (from console.groq.com)
- GROQ_MODEL is spelled correctly

**Fix:** See `CREDENTIALS_GUIDE.md`

### Port 5000 Already in Use
**Change in .env:**
```
PORT=5001
```

Or kill the process using port 5000.

---

## 📝 API Endpoints (Will Be Created)

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Sign in
- `POST /api/auth/logout` - Sign out
- `GET /api/auth/me` - Current user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update profile
- `DELETE /api/users/:id` - Delete account

### Chats
- `POST /api/chats` - Create new chat
- `GET /api/chats` - Get all user's chats
- `GET /api/chats/:id` - Get single chat
- `PUT /api/chats/:id` - Rename chat
- `DELETE /api/chats/:id` - Delete chat

### Messages
- `POST /api/chats/:chatId/messages` - Send message & get AI response
- `GET /api/chats/:chatId/messages` - Get chat history

---

## 🔑 Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` |
| `CLIENT_URL` | React frontend URL | `http://localhost:5173` |
| `MONGO_URI` | MongoDB connection | `mongodb+srv://user:pass@cluster...` |
| `JWT_SECRET` | Token signing key | `abc123def456...` |
| `JWT_EXPIRES_IN` | Token expiration | `7d` |
| `GROQ_API_KEY` | AI API key (SECRET!) | `gsk_abcd...` |
| `GROQ_MODEL` | AI model name | `mixtral-8x7b-32768` |

---

## 📞 Getting Help

1. **MongoDB Issues:** See `PHASE_2_ENV_SETUP.md` → Troubleshooting
2. **Groq Issues:** See `CREDENTIALS_GUIDE.md`
3. **Setup Issues:** See `PHASES_2_3_4_SUMMARY.md`
4. **General:** Check `SETUP.md` for concepts

---

## ✅ Checklist Before Proceeding to Phase 5

- [ ] npm install completed
- [ ] .env file created with all values
- [ ] npm run dev shows no errors
- [ ] MongoDB connection successful
- [ ] Groq API validated
- [ ] Health check works
- [ ] .env in .gitignore
- [ ] Ready for database models!

---

## 🎓 Learning Path

1. **Phase 1-4 (Foundation)** ✅
   - Learn how Express, MongoDB, and Groq connect
   - Understand configuration & security

2. **Phase 5 (Data Structure)**
   - Learn MongoDB schemas & Mongoose models
   - Design data structure for users, chats, messages

3. **Phase 6 (Authentication)**
   - Learn JWT tokens
   - Learn password hashing
   - Implement user login/register

4. **Phase 7 (API Routes)**
   - Learn RESTful API design
   - Create chat & message endpoints
   - Integrate with React frontend

5. **Phase 8 (AI Integration)**
   - Learn how Groq API works
   - Send messages to Groq
   - Save responses to MongoDB

---

## 📦 Dependencies Explained

| Package | Purpose |
|---------|---------|
| `express` | Web framework |
| `mongoose` | MongoDB ORM |
| `dotenv` | Load .env variables |
| `cors` | Cross-origin requests |
| `cookie-parser` | Parse cookies |
| `bcryptjs` | Password hashing |
| `jsonwebtoken` | JWT auth tokens |
| `express-validator` | Input validation |
| `helmet` | Security headers |
| `morgan` | HTTP logging |
| `groq-sdk` | Groq AI API |
| `nodemon` | Dev auto-reload |

---

## 🚀 Next Steps

**Ready to continue?**

1. Make sure your `.env` file is filled with real credentials
2. Run `npm run dev` and verify server starts
3. Check all logs are green/success
4. Then proceed to **Phase 5: Database Models**

---

**Last Updated:** August 14, 2026  
**Status:** ✅ Phases 1-4 Complete  
**Next:** Phase 5 - Database Models (User, Chat, Message)

---

For detailed setup: See individual phase documents listed above ⬆️
