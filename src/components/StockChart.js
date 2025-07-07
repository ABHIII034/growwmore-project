'use client';

import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

export default function StockChart({ symbol, data }) {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const candleSeriesRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Initialize chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: '#1e1e1e' },
        textColor: '#d9d9d9',
      },
      grid: {
        vertLines: { color: '#2B2B43' },
        horzLines: { color: '#2B2B43' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });

    chartRef.current = chart;

    // Add candlestick series - NOTE THE DIFFERENT METHOD NAME
    const candleSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderDownColor: '#ef5350',
      borderUpColor: '#26a69a',
      wickDownColor: '#ef5350',
      wickUpColor: '#26a69a',
    });

    candleSeriesRef.current = candleSeries;

    // Handle resize
    const handleResize = () => {
      chart.applyOptions({ 
        width: chartContainerRef.current.clientWidth 
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  // Update chart when data changes
  useEffect(() => {
    if (candleSeriesRef.current && data && data.length > 0) {
      candleSeriesRef.current.setData(data);
      chartRef.current.timeScale().fitContent();
    }
  }, [data]);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4 text-white">{symbol} Chart</h3>
      <div 
        ref={chartContainerRef} 
        className="w-full rounded-lg overflow-hidden"
      />
    </div>
  );
}