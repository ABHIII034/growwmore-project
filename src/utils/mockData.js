// export function GenerateMockData() {
//   const now = new Date();
//   const data = [];
//   let previousValue = 100 + Math.random() * 50;
  
//   for (let i = 0; i < 100; i++) {
//     const date = new Date(now);
//     date.setDate(now.getDate() - (100 - i));
    
//     const volatility = 0.5 + Math.random() * 2;
//     const changePercent = 2 * volatility * (Math.random() - 0.5);
//     const newValue = previousValue * (1 + (changePercent / 100));
    
//     data.push({
//       time: date.getTime() / 1000,
//       open: previousValue,
//       high: newValue + Math.random() * 5,
//       low: newValue - Math.random() * 5,
//       close: newValue
//     });
    
//     previousValue = newValue;
//   }
  
//   return data;
// }
// utils/mockData.js
"use client";
export function generateMockData() {
  const now = new Date();
  const data = [];
  let previousValue = 100 + Math.random() * 50;

  for (let i = 0; i < 100; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - (100 - i));

    const volatility = 0.5 + Math.random() * 2;
    const changePercent = 2 * volatility * (Math.random() - 0.5);
    const newValue = previousValue * (1 + (changePercent / 100));

    data.push({
      time: date.getTime() / 1000,
      open: previousValue,
      high: newValue + Math.random() * 5,
      low: newValue - Math.random() * 5,
      close: newValue
    });

    previousValue = newValue;
  }

  return data;
}
