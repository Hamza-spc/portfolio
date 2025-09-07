import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="slide-in-left">
            <Card className="glass-card border-primary/20 glow-effect">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Your Name" 
                      className="glass-card border-primary/30 focus:border-primary"
                    />
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="glass-card border-primary/30 focus:border-primary"
                    />
                  </div>
                  <Input 
                    placeholder="Subject" 
                    className="glass-card border-primary/30 focus:border-primary"
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="glass-card border-primary/30 focus:border-primary"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 glow-effect transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="slide-in-right space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 glass-card rounded-lg border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">hamza.2simou@email.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 glass-card rounded-lg border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">0616161578</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 glass-card rounded-lg border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Marrakech, Morocco</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg border-primary/20 glow-effect">
              <h4 className="text-lg font-semibold mb-4 gradient-text">Available for</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>✨ Full-stack Development</li>
                <li>🎨 UI/UX Design Projects</li>
                <li>📱 Mobile App Development</li>
                <li>🎯 Technical Leadership</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 slide-up">
          <p className="text-muted-foreground">
            © 2024 Hamza Simou. 
          </p>
        </div>
      </div>
    </section>
  );
};