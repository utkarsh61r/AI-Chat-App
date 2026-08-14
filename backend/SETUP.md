# AI Chat Backend - Setup Guide

## Phase 1: Node.js & Express Setup ✅

This document explains the initial backend setup for the AI Chat Application.

### What We Created

#### 1. **package.json**
This file manages your Node.js project and its dependencies.

**Key Sections:**
- `"type": "module"` - Enables ES Module syntax (modern JavaScript)
- `"scripts"` - Commands to run your project
- `"dependencies"` - Production packages your app needs
- `"devDependencies"` - Development-only packages (like nodemon)

**How to use:**
```bash
npm install          # Install all dependencies
npm run dev          # Run development server with auto-reload
npm start            # Run production server
```

#### 2. **.gitignore**
Tells Git which files to NOT track/upload to GitHub.

**Why it's important:**
- Keeps `.env` (with secrets) out of GitHub ✅
- Reduces repository size by excluding `node_modules/` ✅
- Prevents accidental exposure of sensitive data ✅

#### 3. **.env.example**
A template showing what environment variables you need.

**Why it's important:**
- Documents required configuration
- Team members can see what setup is needed
- Safe to commit to GitHub (no real secrets)

### Important Concepts

#### **Node.js**
- JavaScript runtime that runs outside the browser
- Lets you write server-side code in JavaScript
- Built on Chrome's V8 engine

#### **npm (Node Package Manager)**
- Tool to install and manage packages/libraries
- Similar to pip (Python) or maven (Java)
- `npm install <package>` downloads libraries

#### **Express.js**
- Lightweight web framework for Node.js
- Makes it easy to create APIs
- Handles routing, middleware, error handling

#### **ES Modules vs CommonJS**
Modern (ES Modules):
```javascript
import express from 'express';
export default app;
```

Old (CommonJS):
```javascript
const express = require('express');
module.exports = app;
```

We use **ES Modules** (modern style).

#### **Dependencies Explained**

| Package | Purpose |
|---------|---------|
| `express` | Web framework for building APIs |
| `mongoose` | MongoDB object modeling |
| `dotenv` | Load environment variables from .env |
| `cors` | Allow requests from React frontend |
| `cookie-parser` | Parse HTTP cookies |
| `bcryptjs` | Hash passwords securely |
| `jsonwebtoken` | Create JWT tokens for auth |
| `express-validator` | Validate input data |
| `helmet` | Secure HTTP headers |
| `morgan` | Log HTTP requests |
| `groq-sdk` | Interact with Groq API |
| `nodemon` (dev) | Auto-restart server on code changes |

### Next Steps

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Proceed to **Phase 2** - Environment Variables Setup

### Troubleshooting

**Error: "npm: command not found"**
- Install Node.js from https://nodejs.org/
- Restart your terminal

**Error: "Cannot find module"**
- Run `npm install` again
- Delete `node_modules/` folder and reinstall

**Port 5000 already in use**
- Change PORT in .env to 5001, 5002, etc.
- Or kill the process using that port

---

**Status:** ✅ Phase 1 Complete - Express Setup Done  
**Next:** Phase 2 - Environment Variables Configuration
