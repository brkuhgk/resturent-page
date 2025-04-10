
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 header-decoration">Visit Us</h2>
              <p className="text-foreground/70 mb-6">
                We'd love to welcome you to SpiceHaven. Experience our warm hospitality and exquisite flavors in a beautiful setting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <h3 className="font-medium">Location</h3>
                  </div>
                  <p className="text-foreground/70">
                    123 Spice Avenue<br />
                    Flavortown, CA 90210
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <h3 className="font-medium">Contact</h3>
                  </div>
                  <p className="text-foreground/70">
                    (555) 123-4567<br />
                    info@spicehaven.com
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="font-medium">Opening Hours</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-foreground/70">11:30 AM - 10:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday - Sunday</p>
                    <p className="text-foreground/70">12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
              Make a Reservation
            </Button>
          </div>

          <div className="rounded-xl overflow-hidden h-[400px] lg:h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941512199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1680449690911!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="restaurant-location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
