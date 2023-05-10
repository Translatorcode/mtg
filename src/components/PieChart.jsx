import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { UserData } from '../Data';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { mortgageCalc } from '../redux/slices/mortgageCalc';

const PieChart = ({ chartData }) => {
  const { totalPaid, remainingBalance } = useSelector((state) => state.mortgageCalc);

  useEffect(() => {
    setMortgageData({
      ...mortgageData,
      datasets: [
        {
          ...mortgageData.datasets[0],
          data: [totalPaid, remainingBalance],
        },
      ],
    });
  }, [totalPaid, remainingBalance]);

  const [mortgageData, setMortgageData] = useState({
    labels: ['Interest/Principal', 'Remaining Balance'],
    datasets: [
      {
        label: 'BreakDown',
        data: [totalPaid, remainingBalance],
        backgroundColor: ['#585b96', '#91a321'],
      },
    ],
  });

  return <Doughnut data={mortgageData} />;
};

export default PieChart;
