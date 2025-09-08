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
  TO_EMAIL: 'hamza.2simou@email.com'
};

// EmailJS template variables that should match your EmailJS template
export const EMAILJS_TEMPLATE_PARAMS = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  subject: '{{subject}}',
  message: '{{message}}',
  to_email: '{{to_email}}'
};
