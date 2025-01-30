import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Contact() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-6 h-6 text-[#0070f3]" />
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a2ff]">
            Contact
          </h1>
          <Badge variant="default">Get in touch</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* About Me Section */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-card border">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi, I'm Naga Nithin! I'm a passionate software developer focused on creating elegant and efficient solutions 
                to complex problems. Code Visualizer is one of my projects aimed at making code understanding and 
                visualization more accessible to everyone.
              </p>
              <p>
                I believe in the power of visual learning and how it can enhance our understanding of code structures 
                and algorithms. Through this tool, I hope to help developers better understand and communicate their code.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-[#0070f3]/5 border border-[#0070f3]/10">
            <h2 className="text-xl font-semibold mb-4 text-[#0070f3]">Get in Touch</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Have a bug to report? Feature suggestion? Or just want to say hi? 
                Feel free to reach out to me at:
              </p>
              <a 
                href="mailto:connect.naganithin@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0070f3] text-white hover:bg-[#0070f3]/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                connect.naganithin@gmail.com
              </a>
              <div className="mt-6 space-y-3">
                <p className="text-sm text-muted-foreground">You can contact me about:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3]" />
                    Bug reports and issues
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3]" />
                    Feature suggestions and ideas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3]" />
                    Collaboration opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3]" />
                    General feedback and questions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="p-6 rounded-xl bg-card border">
            <h2 className="text-xl font-semibold mb-4">Response Time</h2>
            <p className="text-muted-foreground">
              I typically respond to emails within 24-48 hours. For urgent matters, 
              please mention "Urgent" in the subject line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}