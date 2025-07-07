"use client"
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import AuthForm from '@/components/AuthForm'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setError('')
      setLoading(true)
      // Here you would typically call your API
      // For demo, we'll just simulate a successful login
      login({ email, name: 'Demo User' })
      router.push('/dashboard')
    } catch {
      setError('Failed to log in')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Log In to GrowMore</h2>
        {error && <div className="bg-red-500 text-white p-3 mb-4 rounded">{error}</div>}
        <AuthForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSubmit}
          loading={loading}
          buttonText="Log In"
        />
        <div className="mt-4 text-center text-gray-400">
          Need an account? <Link href="/register" className="text-green-400 hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}