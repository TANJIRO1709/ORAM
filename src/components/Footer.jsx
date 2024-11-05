import {  Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white sm:items-center">
      <div className="container mx-auto px-6 py-10 md:px-8 lg:px-12">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center sm:justify-items-start">
          <div className="space-y-4 text-center sm:text-left">
            <img
              src="/logo.png" // Update with your ORAM logo path
              alt="ORAM Logo"
              width={150}
              height={80}
              className="h-16 w-auto mx-auto sm:mx-0"
            />
            <div className="flex justify-center sm:justify-start space-x-3">
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-gray-700">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">News</a></li>
              <li><a href="#" className="hover:text-gray-900">Partners</a></li>
            </ul>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-gray-700">Analytics</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Mechanical Analysis</a></li>
              <li><a href="#" className="hover:text-gray-900">Behavioral Analysis</a></li>
              <li><a href="#" className="hover:text-gray-900">Performance Metrics</a></li>
              <li><a href="#" className="hover:text-gray-900">Reports</a></li>
            </ul>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-gray-700">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Training Materials</a></li>
              <li><a href="#" className="hover:text-gray-900">Best Practices</a></li>
              <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-900">API Access</a></li>
            </ul>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-gray-700">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">Technical Support</a></li>
              <li><a href="#" className="hover:text-gray-900">System Status</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-gray-700">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Enterprise</a></li>
              <li><a href="#" className="hover:text-gray-900">Integration</a></li>
              <li><a href="#" className="hover:text-gray-900">Custom Reports</a></li>
              <li><a href="#" className="hover:text-gray-900">Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-8 mt-8 border-t text-sm text-gray-600 justify-center">
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900">Security</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900">Data Protection</a>
        </div>
      </div>
    </footer>
  );
}
