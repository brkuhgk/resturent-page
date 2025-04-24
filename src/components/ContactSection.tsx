
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
                  138-140 duke street EH6 8HR <br />
                  EDINBURGH

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
                    (131) 555-3007<br />
                    info@cholahighlands.com
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
                    <p className="font-medium">Monday - Saturday</p>
                    <p className="text-foreground/70">5:00 PM - 11:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-foreground/70">12:30 PM - 2:30 PM && 6:30 PM - 11:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
              Make a Reservation
            </Button> */}
          </div>

          <div className="rounded-xl overflow-hidden h-[400px] lg:h-full">
            <iframe 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=138-140%20Duke%20Street,%20EH6%208hR,%20Edinburgh%20+(Cholahighlands)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
