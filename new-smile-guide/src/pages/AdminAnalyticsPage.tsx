import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { analyticsService, GAReport } from '../services/analyticsService';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminAnalyticsPage: React.FC = () => {
  const [report, setReport] = useState<GAReport | null>(null);

  useEffect(() => {
    analyticsService.getReport().then(setReport);
  }, []);

  const chartData = {
    labels: ['Sessions', 'Conversions', 'Events'],
    datasets: [
      {
        label: 'Last 7 Days',
        data: report ? [report.sessions, report.conversions, report.events] : [0, 0, 0],
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Analytics Overview
      </Typography>
      <Box sx={{ maxWidth: 600 }}>
        <Bar data={chartData} />
      </Box>
    </Container>
  );
};

export default AdminAnalyticsPage;
