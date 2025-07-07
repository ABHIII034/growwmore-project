// 'use client';

// import { useState, useEffect } from 'react';
// import { generateMockData } from '@/utils/mockData';
// import StockChart from '@/components/StockChart';
// // import MiniCurrencyConverter from '@/components/MiniCurrencyConverter';
// import CurrencyConverter from '@/components/CurrencyConverter';

// const stocks = [
//   { symbol: 'AAPL', name: 'Apple Inc.' },
//   { symbol: 'TSLA', name: 'Tesla Inc.' },
//   { symbol: 'AMZN', name: 'Amazon.com Inc.' },
//   { symbol: 'GOOGL', name: 'Alphabet Inc.' },
// ];

// export default function Dashboard() {
//   const [selectedStock, setSelectedStock] = useState(stocks[0]);
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     // In a real app, you would fetch this from an API
//     const data = generateMockData();
//     setChartData(data);
//   }, [selectedStock]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Stock Dashboard</h1>
      
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
//         {stocks.map(stock => (
//           <button
//             key={stock.symbol}
//             onClick={() => setSelectedStock(stock)}
//             className={`p-4 rounded-lg ${selectedStock.symbol === stock.symbol 
//               ? 'bg-green-600 text-white' 
//               : 'bg-gray-800 hover:bg-gray-700'}`}
//           >
//             {stock.symbol}
//           </button>
//         ))}
//       </div>

//       <StockChart symbol={selectedStock.symbol} data={chartData} />
//       <CurrencyConverter user={user} />
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { generateMockData } from '@/utils/mockData';
import StockChart from '@/components/StockChart';
import CurrencyConverter from '@/components/CurrencyConverter';
import { useAuth } from '@/context/AuthContext';

const stocks = [
  { symbol: 'AAPL', name: 'Apple Inc.' },
  { symbol: 'TSLA', name: 'Tesla Inc.' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.' },
];

export default function Dashboard() {
  const [selectedStock, setSelectedStock] = useState(stocks[0]);
  const [chartData, setChartData] = useState([]);
  const { user } = useAuth(); // Get user from auth context

  useEffect(() => {
    // In a real app, you would fetch this from an API
    const data = generateMockData();
    setChartData(data);
  }, [selectedStock]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Stock Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        {stocks.map(stock => (
          <button
            key={stock.symbol}
            onClick={() => setSelectedStock(stock)}
            className={`p-4 rounded-lg ${selectedStock.symbol === stock.symbol 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-800 hover:bg-gray-700'}`}
          >
            {stock.symbol}
          </button>
        ))}
      </div>

      <StockChart symbol={selectedStock.symbol} data={chartData} />
      
      {/* Only show converter if user is logged in */}
      {user && <CurrencyConverter />}
    </div>
  );
}