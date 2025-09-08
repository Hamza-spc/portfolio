# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions at `hamza.2simou@email.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as your email provider
4. **IMPORTANT**: When setting up Gmail, make sure to:
   - Use your Gmail account: `hamza.2simou@gmail.com`
   - Grant **ALL** required permissions when prompted
   - Specifically allow "Send email on your behalf" permission
   - If you see scope errors, revoke permissions and re-authorize
5. Name your service: `service_portfolio`
6. Note down the **Service ID**

### Troubleshooting Gmail API Scope Error:

If you get "Request had insufficient authentication scopes" error:

1. **Revoke Current Permissions**:

   - Go to [Google Account Settings](https://myaccount.google.com/permissions)
   - Find EmailJS in "Third-party apps with account access"
   - Click "Remove access"

2. **Re-authorize with Full Permissions**:
   - Go back to EmailJS dashboard
   - Delete the current Gmail service
   - Create a new Gmail service
   - When prompted, make sure to check ALL permission boxes
   - Grant "Send email on your behalf" permission

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Name your template: `template_contact`
5. Note down the **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy the public key

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key
3. Update `SERVICE_ID` and `TEMPLATE_ID` if you used different names

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out and submit the form
4. Check your email at `hamza.2simou@email.com`

## Alternative: Use Outlook/Hotmail Instead

If Gmail continues to give scope errors, try using Outlook:

1. **Create Outlook Service**:

   - In EmailJS, choose **Outlook** instead of Gmail
   - Use your Gmail address: `hamza.2simou@gmail.com`
   - Outlook often has fewer permission issues

2. **Or Use Custom SMTP**:
   - Choose **Other** email service
   - Use Gmail SMTP settings:
     - SMTP Server: `smtp.gmail.com`
     - Port: `587`
     - Username: `hamza.2simou@gmail.com`
     - Password: Use an App Password (not your regular password)

## Troubleshooting

- Make sure your email service is properly configured
- Check that the template variables match exactly
- Verify your public key is correct
- Check the browser console for any error messages
- For Gmail: Use App Password instead of regular password
- For scope errors: Revoke and re-authorize with full permissions

## Free Tier Limits

- 200 emails per month
- Perfect for portfolio contact forms
- Upgrade if you need more emails
