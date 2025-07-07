export default function AuthForm({ email, setEmail, password, setPassword, onSubmit, loading, buttonText }) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-300 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
          required
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
      >
        {buttonText}
      </button>
    </>
  )
}