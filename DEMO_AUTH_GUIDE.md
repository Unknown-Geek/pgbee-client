# 🚨 DEMO AUTHENTICATION GUIDE

## Overview
This document outlines the mock authentication system implemented for demonstration purposes while the backend is down. All mock code is clearly marked and can be easily removed when the real backend is ready.

## 🔑 Demo Credentials

### Available Test Users:
1. **Demo User**
   - Email: `demo@pgbee.com`
   - Password: `demo123`
   - Role: student

2. **John Doe**
   - Email: `john@example.com`
   - Password: `password123`
   - Role: student

3. **Jane Smith**
   - Email: `jane@example.com`
   - Password: `password123`
   - Role: student

## 🎯 How to Test

### Login Flow:
1. Go to http://localhost:3000
2. You'll be redirected to `/login` (since you're not authenticated)
3. Use any of the demo credentials above
4. Click "Log In" - you'll see a 1-second delay simulating API call
5. Success! You'll be redirected to `/userDashboard`

### Signup Flow:
1. Go to `/signup`
2. Fill in any details (they won't be saved, just for demo)
3. Click "Sign Up" - you'll get a success message with demo credentials
4. You'll be redirected to `/login` to test the login flow

### Protected Routes Test:
1. Try accessing `/userDashboard`, `/profile`, or `/inbox` without logging in
2. You'll be automatically redirected to `/login`
3. After logging in, you can access all protected routes

### Logout Test:
1. When logged in, click the hamburger menu (☰) in the navbar
2. Click "Logout" at the bottom of the sidebar
3. You'll be logged out and redirected to `/login`

## 🚨 Mock Code Locations

### Files with Mock Code:
1. **`/src/contexts/AuthContext.tsx`** - Main authentication logic
2. **`/src/app/signup/page.tsx`** - Signup simulation

### Search for Mock Code:
All mock code is marked with:
```javascript
// 🚨 MOCK ... - REPLACE WITH REAL API CALL
```

## 🔄 How to Restore Real Backend

### Step 1: Remove Mock Code
Search for all instances of `🚨 MOCK` and replace with the commented real code below each mock section.

### Step 2: AuthContext.tsx Changes
Replace these sections:

**Mock Authentication Check:**
```javascript
// Remove mock localStorage check
// Restore: 
const response = await axios.get('https://server.pgbee.in/auth/me', {
  withCredentials: true,
});
```

**Mock Login:**
```javascript
// Remove mock user checking
// Restore:
const response = await axios.post('https://server.pgbee.in/auth/login', {
  email,
  password,
  role: 'student'
}, {
  withCredentials: true,
});
```

**Mock Logout:**
```javascript
// Remove localStorage.removeItem
// Restore:
await axios.post('https://server.pgbee.in/auth/logout', {}, {
  withCredentials: true,
});
```

### Step 3: Signup Page Changes
```javascript
// Remove mock delay and console.log
// Restore:
await axios.post("https://server.pgbee.in/auth/signup", {
  name: `${firstName} ${lastName}`,
  email,
  password,
  role
});
```

### Step 4: Remove Mock Data
Delete these constants from AuthContext.tsx:
- `MOCK_USERS` array
- `MOCK_USER_KEY` constant

## ✅ Features Working in Demo

### ✨ Authentication Features:
- [x] Login with validation
- [x] Logout functionality
- [x] Session persistence (localStorage for demo)
- [x] Automatic redirects
- [x] Protected routes
- [x] Loading states
- [x] Error handling

### 🛡️ Security Features:
- [x] Route protection
- [x] Automatic login checks
- [x] User state management
- [x] Proper cleanup on logout

### 🎨 UI Features:
- [x] User name display in navbar
- [x] Conditional login/logout buttons
- [x] Loading spinners
- [x] Error messages
- [x] Responsive design

## 🔧 Troubleshooting

### If Authentication Doesn't Work:
1. Clear browser localStorage: `localStorage.clear()`
2. Refresh the page
3. Check browser console for `🚨 MOCK:` messages

### If Routes Don't Redirect:
1. Make sure you're using the exact demo credentials
2. Check that AuthProvider is wrapping the app in layout.tsx
3. Verify ProtectedRoute components are properly imported

## 📱 Production Ready Features

Even though this is mock data, all the real authentication infrastructure is in place:
- JWT cookie handling (`withCredentials: true`)
- Proper TypeScript interfaces
- Error boundaries
- Loading states
- Route guards
- Session management

When you restore the real backend, only the API calls change - all the UI logic, routing, and state management remains the same!
