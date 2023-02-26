import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js/auto';

import {
  selectCurrentPeriod,
  selectIsLoading,
  selectItemsByCategory,
} from 'redux/reports/selectors';
import LoaderCabbage from 'components/LoaderCabbage/LoaderCabbage';

import { Wrapper } from './ReportsChart.styled';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const ReportsChart = () => {
  const [items, setItems] = useState([]);
  const [maxCount, setMaxCount] = useState('');
  const isScreenMorePhone = useMediaQuery('(min-width: 768px)');
  const ticksFontSize = isScreenMorePhone ? 12 : 10;
  const itemsByCategory = useSelector(selectItemsByCategory);
  const currentPeriod = useSelector(selectCurrentPeriod);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (itemsByCategory.length > 0) {
      const sortArray = [...itemsByCategory].sort((a, b) =>
        a.sum < b.sum ? 1 : -1
      );
      setMaxCount(sortArray[0].sum);
      setItems(sortArray.slice(0, 10));
    } else {
      setItems([]);
    }
  }, [itemsByCategory, currentPeriod]);

  const userData = {
    labels: items.map(data =>
      data.description.length > 15
        ? `${data.description.slice(0, 11)}...`
        : data.description
    ),
    datasets: [
      {
        label: '',
        data: items.map(data => data.sum),
        backgroundColor: ['#FF751D', '#FFDAC0'],
        borderRadius: 10,
        borderWidth: 1,
        barMargin: 1,
      },
    ],
  };

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
        align: !isScreenMorePhone ? '0' : 'end',
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
        suggestedMax: maxCount * 1.04,
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
        suggestedMax: maxCount * 1.04,
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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      {isLoading ? (
        <LoaderCabbage />
      ) : items.length > 0 ? (
        <Wrapper>
          <Bar data={userData} options={options} plugins={[ChartDataLabels]} />
        </Wrapper>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

export default ReportsChart;
