# PHASE 2: Environment Variables Setup

## What are Environment Variables?

Environment variables are configuration values stored in a `.env` file.

**Why do we need them?**
- Keep secrets (API keys, database passwords) out of code ✅
- Change settings without modifying code ✅
- Different settings for development vs production ✅
- Team members can use their own credentials ✅

**Example:**
```
# In .env (SECRET - never commit)
GROQ_API_KEY=gsk_abcd1234efgh5678

# In code (SAFE - commit to GitHub)
const apiKey = process.env.GROQ_API_KEY;
```

---

## Complete Environment Variables Explained

### **Server & Frontend**
```
PORT=5000
# Port where Express server runs
# Development: 5000
# Production: Usually 80 or 443

CLIENT_URL=http://localhost:5173
# URL of React frontend
# Allows CORS (cross-origin requests)
# Production: https://yourdomain.com

NODE_ENV=development
# development or production
# Controls logging and error messages
```

### **MongoDB Configuration**
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-chat-db?retryWrites=true&w=majority
# Full MongoDB Atlas connection string
# Format: mongodb+srv://USERNAME:PASSWORD@CLUSTER/DATABASE
```

**How to get MongoDB connection string:**

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free (if not already done)
3. Create a free cluster (M0 - 512MB storage)
4. Click "Connect" on your cluster
5. Select "Drivers" → "Node.js"
6. Copy the connection string
7. Replace `<password>` with your database password
8. Replace `myFirstDatabase` with `ai-chat-db`

Example:
```
Original:
mongodb+srv://upadh:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority

Replace <password> with actual password:
mongodb+srv://upadh:MyPassword123@cluster0.mongodb.net/ai-chat-db?retryWrites=true&w=majority
```

### **JWT (Authentication) Configuration**
```
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long_for_security_change_this
# Random secret string used to sign JWT tokens
# MUST be at least 32 characters
# MUST be random and unique
# Change in production!

JWT_EXPIRES_IN=7d
# How long JWT tokens last
# 7d = 7 days
# After expiry, user must login again
```

**How to generate a secure JWT_SECRET:**

Option 1: Use Node.js
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Option 2: Use online generator
Visit: https://generate-random.org/
- Type: Base64
- Length: 32+ characters
- Click Generate

Option 3: Simple example (for development only):
```
your_super_secret_key_for_jwt_authentication_change_this_in_production_12345
```

### **Groq API Configuration**
```
GROQ_API_KEY=gsk_abcd1234567890efgh1234567890ijkl
# Your Groq API key (keep it SECRET!)
# Never expose to frontend

GROQ_MODEL=mixtral-8x7b-32768
# Groq model to use for AI responses
# Available models:
#   - mixtral-8x7b-32768 (recommended - fast & good quality)
#   - llama2-70b-4096 (slower but more capable)
#   - gemma-7b-it (smaller, lightweight)
```

**How to get Groq API key:**

1. Go to https://console.groq.com
2. Sign up (free tier available)
3. Navigate to "API Keys"
4. Create a new API key
5. Copy the key and save in .env

---

## Step-by-Step Setup

### **Step 1: Create .env file**

Navigate to backend folder:
```bash
cd backend
```

Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

Or manually create file named `.env` in backend folder

### **Step 2: Add MongoDB Connection**

1. Set up MongoDB Atlas (free account)
2. Create free cluster
3. Get connection string
4. Edit `.env`:

```
MONGO_URI=mongodb+srv://upadh:YourPassword@cluster0.mongodb.net/ai-chat-db?retryWrites=true&w=majority
```

### **Step 3: Generate JWT Secret**

Use Node.js command:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Output example:
```
a1b2c3d4e5f6789012345678901234567890abcd1234567890123456789012
```

Add to `.env`:
```
JWT_SECRET=a1b2c3d4e5f6789012345678901234567890abcd1234567890123456789012
```

### **Step 4: Add Groq API Key**

1. Visit https://console.groq.com
2. Create API key
3. Copy it
4. Add to `.env`:

```
GROQ_API_KEY=gsk_abcd1234567890efgh1234567890ijkl
GROQ_MODEL=mixtral-8x7b-32768
```

### **Step 5: Complete .env file**

Your final `.env` should look like:

```
# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# MongoDB
MONGO_URI=mongodb+srv://upadh:YourActualPassword@cluster0.mongodb.net/ai-chat-db?retryWrites=true&w=majority

# JWT
JWT_SECRET=a1b2c3d4e5f6789012345678901234567890abcd1234567890123456789012
JWT_EXPIRES_IN=7d

# Groq AI
GROQ_API_KEY=gsk_abcd1234567890efgh1234567890ijkl
GROQ_MODEL=mixtral-8x7b-32768
```

### **Step 6: Test Connection**

Run server:
```bash
npm run dev
```

You should see:
```
╔════════════════════════════════════════════╗
║   AI Chat Backend Server Started! 🚀       ║
╚════════════════════════════════════════════╝

📍 Server URL: http://localhost:5000
```

✅ If you see this, your `.env` is correctly configured!

---

## Important Security Rules ⚠️

### DO ✅
- ✅ Add `.env` to `.gitignore`
- ✅ Use strong random JWT_SECRET (32+ characters)
- ✅ Keep API keys private
- ✅ Use different keys for development vs production
- ✅ Rotate keys regularly in production
- ✅ Never hardcode secrets in code

### DON'T ❌
- ❌ Commit `.env` to GitHub
- ❌ Share `.env` file with team (share `.env.example` instead)
- ❌ Hardcode API keys in JavaScript files
- ❌ Expose `GROQ_API_KEY` to React frontend
- ❌ Use same secrets for dev and production
- ❌ Share API keys in Slack, email, or messages

---

## Troubleshooting

### **Error: "Cannot find module 'dotenv'"**
```bash
npm install dotenv
```

### **Error: "MONGO_URI is undefined"**
- Check `.env` file exists in backend folder
- Check `MONGO_URI` is spelled correctly
- No spaces around `=` sign
- Example: `MONGO_URI=mongodb+srv://...` (no spaces)

### **MongoDB connection fails**
- Check MongoDB Atlas cluster is running
- Check IP whitelist includes your IP
  - Go to MongoDB Atlas → Security → Network Access
  - Click "Add IP Address"
  - Select "Add Current IP Address"
- Check password in connection string (no special characters need escaping in URI?)

### **Groq API fails**
- Verify API key is correct (copy-paste carefully)
- Check API key has not expired
- Verify GROQ_MODEL is spelled correctly
- Check GROQ_API_KEY is defined in .env

---

## What Happens Next

In **Phase 3**, we'll create:
- `src/config/db.js` - MongoDB connection logic
- `src/config/groq.js` - Groq client setup

These files will read your `.env` variables and set up connections.

---

**Status:** ✅ Phase 2 - Environment Variables Configured  
**Next:** Phase 3 - MongoDB Connection
