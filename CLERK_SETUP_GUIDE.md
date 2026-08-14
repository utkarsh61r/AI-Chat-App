# Fixing "The External Account was not found" Error

## Root Cause
This error occurs when:
1. Clerk's OAuth redirect URLs aren't properly configured
2. The OAuth providers (Google/Apple) aren't linked to your Clerk instance
3. Clerk's account linking settings may need adjustment

## Solution - Configure Clerk Dashboard

### Step 1: Go to Clerk Dashboard
1. Visit: https://dashboard.clerk.com
2. Sign in with your account
3. Select your application

### Step 2: Configure Allowed Redirect URLs
1. Go to **Settings** → **Domains** (or **URLs**)
2. Add the following to **Allowed redirect URLs**:
   ```
   http://localhost:5173
   http://localhost:5173/login
   http://localhost:5173/register
   ```
3. If deploying: Add your production domain:
   ```
   https://yourdomain.com
   https://yourdomain.com/login
   https://yourdomain.com/register
   ```
4. Click **Save**

### Step 3: Enable OAuth Providers
1. Go to **Settings** → **Social Connections**
2. For **Google**:
   - Click the toggle to **Enable**
   - If you don't have credentials, click "Add connection" and follow the prompts
   - It will redirect you to Google Console to create OAuth app
   - Once created, credentials will auto-populate
3. For **Apple**:
   - Click the toggle to **Enable**
   - Follow similar process for Apple Developer account
4. Click **Save**

### Step 4: Account Linking Settings (if needed)
1. Go to **Settings** → **User & Authentication**
2. Check "Account Linking" settings
3. Make sure it's configured to allow users to connect multiple providers
4. Click **Save**

### Step 5: Verify Your Keys
Ensure your `.env.local` has:
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### Step 6: Test the Flow
1. Clear browser cache and cookies
2. Go to: http://localhost:5173/register
3. Click "Google" or "Apple" button
4. You should see the OAuth login screen (not the "External Account was not found" error)

## Additional Troubleshooting

### If you still get the error:
1. **Check browser console** for exact error messages
2. **Verify domain name** - Make sure http://localhost:5173 is in your allowed redirects
3. **Test with email/password first** - To ensure basic signup works
4. **Clear browser storage** - Delete all cookies and localStorage for the domain
5. **Check Clerk instance** - Make sure you're using the correct Clerk API keys

### For Production:
- Replace `pk_test_` with your production key: `pk_live_`
- Add your production domain to redirect URLs
- Ensure SSL certificate is valid (https only)

## Quick Test
After configuration, test:
1. Sign up with email/password → Should work
2. Sign up with Google → Should NOT show "External Account" error
3. Sign in with Apple → Should allow signup if new user

If you see "External Account was not found" it means the OAuth provider connection failed at the Clerk Dashboard level.
