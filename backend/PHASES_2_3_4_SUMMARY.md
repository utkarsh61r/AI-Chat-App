# PHASES 2-4: Complete Setup Guide

## Overview

We've now completed **Phase 2, 3, and 4**:
- ✅ Phase 2: Environment Variables (.env setup)
- ✅ Phase 3: MongoDB Connection (db.js)
- ✅ Phase 4: Groq Client Setup (groq.js)

---

## 🔄 How Everything Connects

### Connection Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  STARTUP SEQUENCE                                           │
│  ═══════════════════════════════════════════════════════    │
│                                                             │
│  1. npm run dev                                             │
│     ↓                                                       │
│  2. Load .env (dotenv.config())                             │
│     ├─ PORT=5000                                            │
│     ├─ MONGO_URI=mongodb+srv://...                          │
│     ├─ JWT_SECRET=abc123...                                 │
│     ├─ GROQ_API_KEY=gsk_...                                 │
│     └─ GROQ_MODEL=mixtral-8x7b-32768                        │
│     ↓                                                       │
│  3. Validate Groq Config (groq.js)                          │
│     ├─ Check GROQ_API_KEY exists                            │
│     └─ Check GROQ_MODEL exists                              │
│     ↓                                                       │
│  4. Connect to MongoDB (db.js)                              │
│     ├─ Read MONGO_URI                                       │
│     ├─ Connect using Mongoose                               │
│     └─ Wait for success/error                               │
│     ↓                                                       │
│  5. Start Express Server                                    │
│     ├─ Setup middleware                                     │
│     ├─ Setup routes                                         │
│     └─ Listen on PORT 5000                                  │
│     ↓                                                       │
│  ✅ Server Ready!                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Files Created

### src/config/db.js
**Purpose:** Handles MongoDB connection
**Key Functions:**
- `connectDB()` - Connects to MongoDB
- `disconnectDB()` - Disconnects safely
- `getConnectionStatus()` - Returns connection state

**When it runs:** When server starts (Phase 3)

```javascript
// In server.js:
import { connectDB } from './config/db.js';
await connectDB(); // ← Runs when server starts
```

### src/config/groq.js
**Purpose:** Initializes Groq AI API client
**Key Functions:**
- `validateGroqConfig()` - Checks API key and model
- Exports configured Groq client

**When it runs:** When server starts (Phase 4)

```javascript
// In server.js:
import { validateGroqConfig } from './config/groq.js';
validateGroqConfig(); // ← Runs when server starts
```

---

## 🔐 Security Architecture

### How API Keys Stay Safe

```
NEVER send to frontend:
  ❌ GROQ_API_KEY
  ❌ MONGO_URI (contains password)
  ❌ JWT_SECRET
  ❌ Any credentials

Safe message flow:

React Frontend                Express Backend (SAFE)
     │                              │
     │ POST /api/chat               │
     ├─ User message text ────────→ │
     │                              │ (has GROQ_API_KEY)
     │                              ├─ Call Groq API
     │                              │ ← Get AI response
     │                              │
     │ ← Response text only         │
     │   (no API keys!)             │
     │                              │
     ↓                              ↓
  Display                      Log to console
```

---

## 📋 Step-by-Step Setup (Quick Checklist)

### 1. Create Backend Folder Structure
```bash
cd backend
npm install
```

### 2. Create .env File
```bash
cp .env.example .env
```

### 3. Fill in .env Values

**Get MongoDB URI:**
1. Visit https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to .env:
```
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/ai-chat-db?retryWrites=true&w=majority
```

**Get Groq API Key:**
1. Visit https://console.groq.com
2. Create API key
3. Add to .env:
```
GROQ_API_KEY=gsk_abcd1234567890efgh
GROQ_MODEL=mixtral-8x7b-32768
```

**Generate JWT Secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Add to .env:
```
JWT_SECRET=your_generated_secret_here
```

### 4. Complete .env File

```
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/ai-chat-db?retryWrites=true&w=majority
JWT_SECRET=a1b2c3d4e5f6789012345678901234567890abcd1234567890123456789012
JWT_EXPIRES_IN=7d

GROQ_API_KEY=gsk_abcd1234567890efgh1234567890ijkl
GROQ_MODEL=mixtral-8x7b-32768
```

### 5. Test Connection
```bash
npm run dev
```

Expected output:
```
╔════════════════════════════════════════════╗
║   AI Chat Backend Server Started! 🚀       ║
╚════════════════════════════════════════════╝

✅ Integrations Ready:
  • Express.js Server
  • MongoDB Connection (via mongoose)
  • Groq AI API (via groq-sdk)
```

✅ If you see this, all connections are working!

---

## 🐛 Troubleshooting

### MongoDB Connection Error

**Error:** `MongoServerError: authentication failed`

**Solution:**
1. Check username and password in MONGO_URI
2. Special characters in password need URL encoding
   - Example: `pass@word` → `pass%40word`
3. Whitelist your IP in MongoDB Atlas
   - Security → Network Access → Add IP

### Groq API Error

**Error:** `GROQ_API_KEY is not defined`

**Solution:**
1. Check .env file exists in backend folder
2. Check GROQ_API_KEY is spelled correctly
3. No extra spaces: `GROQ_API_KEY=gsk_...` (correct)
4. Restart server after adding to .env

### Port Already in Use

**Error:** `listen EADDRINUSE: address already in use :::5000`

**Solution:**
```bash
# Kill process using port 5000
# Windows PowerShell:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or just change port in .env:
PORT=5001
```

---

## ✅ Verification Checklist

Before proceeding to Phase 5 (Database Models), verify:

- [ ] `npm install` completed without errors
- [ ] `.env` file created with all values filled
- [ ] `.env` added to `.gitignore`
- [ ] `npm run dev` shows successful startup
- [ ] No MongoDB connection errors
- [ ] No Groq API validation errors
- [ ] Health check works: http://localhost:5000/api/health
- [ ] Console shows "Server Ready!" message

---

## 📊 Files Summary

| File | Purpose | Status |
|------|---------|--------|
| `package.json` | Dependencies & scripts | ✅ Created |
| `.env.example` | Template for .env | ✅ Created |
| `.env` | Your actual secrets | ⚠️ You create |
| `.gitignore` | Don't commit secrets | ✅ Created |
| `src/server.js` | Main app & middleware | ✅ Updated |
| `src/config/db.js` | MongoDB connection | ✅ Created |
| `src/config/groq.js` | Groq AI setup | ✅ Created |

---

## 🎯 Next: Phase 5

In Phase 5, we'll create the **Database Models**:
- User model (username, email, password, profile)
- Chat model (chat ID, title, created date)
- Message model (content, sender, timestamp)

These models define how data is stored in MongoDB.

---

## 💡 Key Takeaways

1. **Environment variables** keep secrets safe ✅
2. **db.js** connects to MongoDB when server starts
3. **groq.js** initializes AI API client
4. **API key never leaves backend** (security first!) ✅
5. **Frontend communicates via Express routes only**

---

**Status:** ✅ Phases 2-4 Complete  
**Next:** Phase 5 - Database Models
