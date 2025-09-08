// EmailJS Configuration
// You need to set up EmailJS account and get these values from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID (create a service in EmailJS dashboard)
  SERVICE_ID: 'service_portfolio',
  
  // Your EmailJS template ID (create a template in EmailJS dashboard)
  TEMPLATE_ID: 'template_contact',
  
  // Your EmailJS public key (found in EmailJS account settings)
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with your actual public key
  
  // Your email address where messages will be sent
  TO_EMAIL: 'hamza.2simou@gmail.com'
};

// EmailJS template variables that should match your EmailJS template
export const EMAILJS_TEMPLATE_PARAMS = {
  name: '{{name}}',           // Sender's name
  email: '{{email}}',         // Sender's email (for reply-to)
  title: '{{title}}',         // Email subject
  message: '{{message}}',     // Message content
  time: '{{time}}'            // Timestamp
};
