"use client";
import Link from 'next/link'
import StockCard from '@/components/StockCard'
import TradingWidget from '@/components/TradingWidget'

export default function Home() {
  const trendingStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 185.64, change: 1.23 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 175.34, change: -2.45 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.75, change: 0.89 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: 1.67 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to GrowMore</h1>
        <p className="text-xl mb-8">Trade with confidence. Grow with community.</p>
        <Link href="/dashboard" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
          Start Trading
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Trending Stocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingStocks.map((stock, index) => (
            <StockCard key={index} stock={stock} />
          ))}
        </div>
      </section>

      <section>
        <TradingWidget />
      </section>
    </div>
  )
}