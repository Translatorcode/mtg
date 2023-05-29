import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

const LineChart = () => {
  const { amortizationChart, askingPrice } = useSelector((state) => state.mortgageCalc);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (amortizationChart.length > 0) {
      // const labels = amortizationChart.filter((_, index) => index % 5 === 0).map((item) => item.year);
      // const data = amortizationChart.map((item) => item.balanceRemaining);
      const labels = amortizationChart.map((item) => currentYear + item.year - 1);
      const data = amortizationChart.map((item, index) => (index % 1 === 0 ? item.balanceRemaining : null));

      // Set negative values to 0
      const formattedData = data.map((value) => (value < 0 ? 0 : value));

      setChartData((prevState) => ({
        ...prevState,
        labels: labels,
        datasets: [
          {
            ...prevState.datasets[0],
            data: formattedData,
          },
        ],
      }));
    }
  }, [amortizationChart, askingPrice]);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Balance Remaining',
        type: 'line',
        data: [],
        fill: false,
        borderColor: '#1e6991',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 2,
      },
    ],
  });

  const formatYAxisLabel = (value) => {
    return `${value / 1000}K`;
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: askingPrice,
        ticks: {
          stepSize: 50000,
          callback: formatYAxisLabel,
        },
        title: {
          display: true,
          text: 'Mortgage',
          font: {
            family: 'Karla, sans-serif',
            size: 14,
            weight: 'bold',
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Years',
          font: {
            family: 'Karla, sans-serif',
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
  };
  return (
    <div className='container bg-white shadow-sm p-3' style={{ fontFamily: 'Karla, sans-serif' }}>
      <Line data={chartData} options={options} height={500} />
    </div>
  );
};

export default LineChart;
