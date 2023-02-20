import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  n,
} from 'chart.js/auto';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Wrapper } from './ReportsChart.styled';

const UserData = [
  {
    id: 1,
    mail: 'email@mail.com',
    date: 2011,
    cashFlowType: 'credit',
    category: 'food',
    description: 'milk',
    value: 50,
  },
  {
    id: 2,
    mail: 'email2@mail.com',
    date: 2013,
    cashFlowType: 'credit',
    category: 'food',
    description: 'meat',
    value: 150,
  },
  {
    id: 3,
    mail: 'email3@mail.com',
    date: 2016,
    cashFlowType: 'credit',
    category: 'food',
    description: 'cheese',
    value: 180,
  },
  {
    id: 3,
    mail: 'email3@mail.com',
    date: 2016,
    cashFlowType: 'credit',
    category: 'food',
    description: 'cheese',
    value: 190,
  },
  {
    id: 1,
    mail: 'email@mail.com',
    date: 2011,
    cashFlowType: 'credit',
    category: 'food',
    description: 'milk',
    value: 50,
  },
  {
    id: 2,
    mail: 'email2@mail.com',
    date: 2013,
    cashFlowType: 'credit',
    category: 'food',
    description: 'meat',
    value: 150,
  },
  {
    id: 3,
    mail: 'email3@mail.com',
    date: 2016,
    cashFlowType: 'credit',
    category: 'food',
    description: 'cheese',
    value: 180,
  },
  {
    id: 3,
    mail: 'email3@mail.com',
    date: 2016,
    cashFlowType: 'credit',
    category: 'food',
    description: 'cheese',
    value: 190,
  },
  {
    id: 3,
    mail: 'email3@mail.com',
    date: 2016,
    cashFlowType: 'credit',
    category: 'food',
    description: 'cheese',
    value: 190,
  },
];

const ReportsChart = () => {
  const isScreenMorePhone = useMediaQuery('(min-width: 768px)');

  const ticksFontSize = isScreenMorePhone ? 12 : 10;

  const [userData, setUserData] = useState({
    labels: UserData.map(data => data.description),
    datasets: [
      {
        label: '',
        data: UserData.map(data => data.value),
        backgroundColor: ['#FF751D', '#FFDAC0'],
        borderRadius: 10,
        borderWidth: 1,
        barMargin: 1,
      },
    ],
  });

  // useEffect(() => setUserData(), []);

  let delayed;
  const options = {
    maintainAspectRatio: false,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: context => {
        let delay = 20;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 900 + context.datasetIndex * 2000;
        }
        return delay;
      },
    },
    responsive: true,
    indexAxis: isScreenMorePhone ? 'x' : 'y',
    plugins: {
      legend: {
        display: false,
      },

      datalabels: {
        align: !isScreenMorePhone ? '240' : 'end',
        anchor: 'end',
        offset: !isScreenMorePhone ? '8' : '',
        font: {
          size: ticksFontSize,
        },

        clamp: false,
        formatter: function (value) {
          return `${value} UAH`;
        },
      },
    },
    barThickness: isScreenMorePhone ? '38' : '18',

    scales: {
      x: {
        stacked: true,
        border: {
          display: false,
        },
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          LayoutPosition: 'top',
          beginAtZero: true,
          display: isScreenMorePhone,
          font: {
            size: ticksFontSize,
          },
        },
      },
      y: {
        stacked: true,
        border: {
          display: false,
        },
        grid: {
          drawOnChartArea: true,
          display: isScreenMorePhone,
          drawBorder: false,
        },
        ticks: {
          LayoutPosition: 'left',
          display: !isScreenMorePhone,
          font: {
            size: ticksFontSize,
          },
          labelOffset: -12,
          mirror: true,
          align: 'end',
          padding: 0,
        },
      },
    },
  };

  return (
    <Wrapper>
      <Bar data={userData} options={options} plugins={[ChartDataLabels]} />
    </Wrapper>
  );
};

export default ReportsChart;
