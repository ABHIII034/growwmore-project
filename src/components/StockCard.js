"use client";
export default function StockCard({ stock }) {
  const isPositive = stock.change >= 0
  
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{stock.symbol}</h3>
          <p className="text-gray-400">{stock.name}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${isPositive ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
          {isPositive ? '+' : ''}{stock.change}%
        </span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-white">${stock.price.toFixed(2)}</p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition duration-300">
          Trade
        </button>
      </div>
    </div>
  )
}