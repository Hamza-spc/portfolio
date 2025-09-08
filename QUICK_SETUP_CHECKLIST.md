# Quick Setup Checklist for EmailJS

## ✅ What You've Already Done:
- [x] Created EmailJS account
- [x] Set up Gmail service
- [x] Created email template with correct placeholders
- [x] Configured template to send to `hamza.2simou@gmail.com`

## 🔧 Final Steps to Complete Setup:

### 1. Get Your EmailJS Keys
From your EmailJS dashboard, copy these values:

- **Service ID**: Go to Email Services → Copy the ID of your Gmail service
- **Template ID**: Go to Email Templates → Copy the ID of your "Contact Us" template  
- **Public Key**: Go to Account → General → Copy your Public Key

### 2. Update Configuration File
Edit `src/config/emailjs.ts` and replace:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',        // Replace this
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',      // Replace this  
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',        // Replace this
  TO_EMAIL: 'hamza.2simou@gmail.com'
};
```

### 3. Test the Contact Form
1. Run your development server: `npm run dev`
2. Go to the contact form
3. Fill out and submit the form
4. Check your Gmail inbox at `hamza.2simou@gmail.com`

## 📧 What You'll Receive:
When someone submits the contact form, you'll get an email with:
- **Subject**: "Contact Us: [their subject]"
- **From**: [their name] via EmailJS
- **Reply To**: [their email address]
- **Content**: Their message with timestamp

## 🚨 If You Still Get Errors:
1. Make sure you saved the template in EmailJS
2. Verify all IDs are correct in the config file
3. Check that Gmail service is properly authorized
4. Try the "Test It" button in EmailJS template editor

## 🎉 You're Almost Done!
Just update those three values in the config file and your contact form will be fully functional!
