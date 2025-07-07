"use client";
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
 GrowMore by <a 
                href="https://www.linkedin.com/in/abhithenext/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                Abhishek Sonawane
              </a>
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/abhithenext/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/ABHIII034/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.instagram.com/abhithenext?igsh=ZjE5amtscnZpMDhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}