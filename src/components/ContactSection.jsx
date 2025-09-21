
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

import { Facebook, Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { FaLine, FaFacebook, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa6';


const contacts = [
  {
    id: 1,
    name: "Line",
    icon: <FaLine className="icon line" />,
    info: "@CCW_NTW",
  },
  {
    id: 2,
    name: "Facebook",
    icon: <FaFacebook className="icon facebook" />,
    info: "Chatchawan Ngernthaworn",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram className="icon instagram" />,
    info: "@dew_cookie_404",
  },
  {
    id: 4,
    name: "GitHub",
    icon:  <FaGithub className="icon github"/>,
    info: "ChatchawanDew404",
  },
  {
    id: 5,
    name: "Gmail",
    icon: <FaEnvelope className="icon gmail" />,
    info: "chatchawan13022547@gmail.com",
  },
];


export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  


  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((c) => (
            <a
              key={c.id}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 bg-white"
            >
              {c.icon}
              <span className="mt-3 text-lg font-semibold text-black">{c.name}</span>
              <span className="mt-1 text-gray-600 text-sm">{c.info}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
