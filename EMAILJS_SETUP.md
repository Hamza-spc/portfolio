# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions at `hamza.2simou@email.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Name your service: `service_portfolio`
6. Note down the **Service ID**

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

## Troubleshooting

- Make sure your email service is properly configured
- Check that the template variables match exactly
- Verify your public key is correct
- Check the browser console for any error messages

## Free Tier Limits

- 200 emails per month
- Perfect for portfolio contact forms
- Upgrade if you need more emails
