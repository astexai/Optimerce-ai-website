import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => (
  <MarketingLayout>
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <form className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@company.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input placeholder="Your company" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea rows={5} placeholder="Tell us about your needs..." />
              </div>
              <Button className="w-full gradient-bg border-0" size="lg">Send Message</Button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-8">
            {[
              { icon: Mail, title: "Email Us", detail: "hello@optimerce.ai", sub: "We reply within 24 hours" },
              { icon: Phone, title: "Call Us", detail: "+1 (555) 123-4567", sub: "Mon-Fri, 9am-6pm EST" },
              { icon: MapPin, title: "Visit Us", detail: "350 Fifth Avenue, Suite 4200", sub: "New York, NY 10118" },
              { icon: MessageSquare, title: "Live Chat", detail: "Available 24/7", sub: "Average response: 2 minutes" },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 flex gap-5">
                <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold">{item.title}</h3>
                  <p className="text-sm font-medium">{item.detail}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  </MarketingLayout>
);

export default Contact;
