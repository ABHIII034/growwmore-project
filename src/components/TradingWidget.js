"use client"
import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function TradingWidget() {
  const [symbol, setSymbol] = useState('')
  const [amount, setAmount] = useState('')
  const [action, setAction] = useState('buy')

  const handleTrade = (e) => {
    e.preventDefault()
    if (!symbol || !amount) {
      toast.error('Please fill all fields')
      return
    }
    
    toast.success(`Successfully ${action === 'buy' ? 'bought' : 'sold'} ${amount} shares of ${symbol}`)
    setSymbol('')
    setAmount('')
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-white">Trade Stocks</h3>
      <form onSubmit={handleTrade}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-300 mb-2">Symbol</label>
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
              placeholder="e.g. AAPL"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
              placeholder="Quantity"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Action</label>
            <select
              value={action}
              onChange={(e) => setAction(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 w-full md:w-auto"
        >
          Execute Trade
        </button>
      </form>
    </div>
  )
}