import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { mortgageCalc } from '../redux/slices/mortgageCalc';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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
        label: 'Amount',
        data: [totalPaid, remainingBalance],
        backgroundColor: ['rgba(	145, 163, 33, 0.8)', 'rgba(51, 	53, 	91, 0.8)'],
        borderColor: 'white',
      },
    ],
    borderWidth: 1,
  });

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: true,
  //   animation: {
  //     animateScale: true,
  //     animateRotate: true,
  //   },
  //   width: 400,
  //   height: 400,
  // };

  return <Doughnut data={mortgageData} width={300} height={300} options={{ maintainAspectRatio: false }} />;
};

export default PieChart;
