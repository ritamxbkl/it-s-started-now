import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase">About</h3>
            <p className="text-sm text-gray-600">
              GreenOcean is your gateway to discovering and sharing the latest AI tools and innovations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Resources</h3>
            <ul className="mt-4 space-y-3">
              {['Documentation', 'Guides', 'API Reference', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-emerald-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Guidelines'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-emerald-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-emerald-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} GreenOcean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}