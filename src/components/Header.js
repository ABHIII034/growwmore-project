"use client";
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-400">
            GrowMore
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-green-400 transition duration-300">Home</Link>
            <Link href="/dashboard" className="hover:text-green-400 transition duration-300">Dashboard</Link>
            <Link href="#" className="hover:text-green-400 transition duration-300">Markets</Link>
            <Link href="#" className="hover:text-green-400 transition duration-300">Community</Link>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="hidden sm:inline">Welcome, {user.name}</span>
                <button 
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition duration-300"
                >
                  Sign In
                </Link>
                <Link 
                  href="/register" 
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}