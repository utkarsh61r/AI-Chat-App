# Getting Your Credentials - Step by Step

## 🔐 MongoDB Atlas Setup (Free)

### Step 1: Create Account
1. Visit https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Create account (use email)
4. Verify email

### Step 2: Create Cluster
1. Click "Create a deployment"
2. Select "Shared" (Free tier - enough for learning)
3. Choose your region closest to you
4. Click "Create"
5. Wait 2-3 minutes for cluster to be created

### Step 3: Get Connection String
1. Click "Connect" button on your cluster
2. Click "Drivers" tab
3. Select "Node.js" driver
4. Copy the connection string

It looks like:
```
mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
```

### Step 4: Modify Connection String
Replace:
- `<username>` with your database username
- `<password>` with your database password
- Add database name before `?`

Before:
```
mongodb+srv://username:password@cluster0.mongodb.net/?retryWrites=true&w=majority
```

After:
```
mongodb+srv://username:password@cluster0.mongodb.net/ai-chat-db?retryWrites=true&w=majority
                                                        ^^^^^^^^^^^
                                                        Add this!
```

### Step 5: Configure Network Access
1. In MongoDB Atlas, go to "Security" → "Network Access"
2. Click "Add IP Address"
3. Click "Add Current IP Address"
4. Confirm

This allows your computer to connect to MongoDB.

---

## 🤖 Groq API Setup (Free)

### Step 1: Create Account
1. Visit https://console.groq.com
2. Click "Sign Up"
3. Create account (Google, GitHub, or email)
4. Verify email

### Step 2: Create API Key
1. Navigate to "API Keys" section
2. Click "Create New API Key"
3. Name it "AI Chat Backend"
4. Click "Create"
5. Copy the API key (starts with `gsk_`)

### Step 3: Check Available Models
Visit https://console.groq.com/keys - You'll see available models:
- `mixtral-8x7b-32768` ← Recommended (fast & good quality)
- `llama2-70b-4096` ← Slower but more capable
- `gemma-7b-it` ← Lightweight, good for simple tasks

For AI Chat app, use: **mixtral-8x7b-32768**

---

## 🔑 Generate JWT Secret

### Option 1: Using Node.js (Recommended)
Open PowerShell/Terminal and run:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Output will be something like:
```
a1b2c3d4e5f6789012345678901234567890abcd1234567890123456789012
```

Copy this entire string to `.env`:
```
JWT_SECRET=a1b2c3d4e5f6789012345678901234567890abcd1234567890123456789012
```

### Option 2: Online Generator
1. Visit https://randomkeygen.com/
2. Copy "CodeIgniter Encryption Keys" value
3. Use in `.env`

### Option 3: Simple Strong Password
Use a strong random string (32+ characters):
```
JWT_SECRET=P@ssw0rd!SecureJWTTokenSecret123456789
```

---

## ✅ Verification Checklist

Before proceeding to Phase 3, verify:

- [ ] MongoDB connection string obtained
- [ ] MongoDB network access configured
- [ ] Groq API key obtained
- [ ] JWT_SECRET generated
- [ ] `.env` file created in backend folder
- [ ] All variables filled in `.env`
- [ ] `.env` is in `.gitignore`
- [ ] Can run `npm run dev` without errors

---

## Your Completed .env Template

Use this template with your actual credentials:

```
# ===========================================
# SERVER & FRONTEND
# ===========================================
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# ===========================================
# MONGODB ATLAS
# ===========================================
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/ai-chat-db?retryWrites=true&w=majority

# ===========================================
# JWT AUTHENTICATION
# ===========================================
JWT_SECRET=YOUR_GENERATED_32_CHARACTER_RANDOM_STRING_HERE_12345678901234567890
JWT_EXPIRES_IN=7d

# ===========================================
# GROQ AI API
# ===========================================
GROQ_API_KEY=gsk_YOUR_API_KEY_HERE_replace_with_actual_key
GROQ_MODEL=mixtral-8x7b-32768
```

---

**Next:** After completing this, proceed to Phase 3 - MongoDB Connection Setup
