export const currencyRates = {
  USD: {
    name: "US Dollar",
    symbol: "$",
    rates: {
      INR: 83.50,  // 1 USD = 83.50 INR
      EUR: 0.93,    // 1 USD = 0.93 EUR
      GBP: 0.80,    // 1 USD = 0.80 GBP
      JPY: 151.50,  // 1 USD = 151.50 JPY
      USD: 1        // Base currency
    }
  },
  INR: {
    name: "Indian Rupee",
    symbol: "₹",
    rates: {
      USD: 0.012,   // 1 INR = 0.012 USD
      EUR: 0.011,   // 1 INR = 0.011 EUR
      GBP: 0.0096,  // 1 INR = 0.0096 GBP
      JPY: 1.81,    // 1 INR = 1.81 JPY
      INR: 1        // Base currency
    }
  },
  // Add more currencies as needed
  EUR: {
    name: "Euro",
    symbol: "€",
    rates: {
      USD: 1.08,
      INR: 90.32,
      GBP: 0.86,
      JPY: 163.50,
      EUR: 1
    }
  }
};