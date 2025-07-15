document.addEventListener('DOMContentLoaded', () => {
  // Positive Reviews Chart
  const ctxPositive = document.getElementById('reviewChart').getContext('2d');
  const grad2024 = ctxPositive.createLinearGradient(0, 0, 0, 400);
  grad2024.addColorStop(0, 'rgba(52, 152, 219, 0.4)');
  grad2024.addColorStop(1, 'rgba(52, 152, 219, 0)');

  const grad2025 = ctxPositive.createLinearGradient(0, 0, 0, 400);
  grad2025.addColorStop(0, 'rgba(247, 37, 133, 0.4)');
  grad2025.addColorStop(1, 'rgba(247, 37, 133, 0)');

  new Chart(ctxPositive, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: '2024',
          data: [1021, 1139, 1527, 2427, 1215, 1021, 1026, 1090, 938, 1479, 1867, 1577],
          fill: true,
          backgroundColor: grad2024,
          borderColor: '#3498db',
          tension: 0.3,
          pointRadius: 3
        },
        {
          label: '2025',
          data: [757, 825, 1035, 1209, 1377, 1542, null, null, null, null, null, null],
          fill: true,
          backgroundColor: grad2025,
          borderColor: '#f72585',
          tension: 0.3,
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Review Volume' }
        }
      }
    }
  });

  // Negative Reviews Chart
  const ctxNegative = document.getElementById('removalChart').getContext('2d');

  const months = [
    'Sep 23','Oct 23','Nov 23','Dec 23','Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24', 'Jul 24',
    'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24',
    'Jan 25', 'Feb 25', 'Mar 25', 'Apr 25', 'May 25', 'Jun 25'
  ];

  const received = [98, 124, 77, 65, 107, 99, 90, 98, 111, 139, 145, 152, 102, 100, 89, 114, 139, 126, 115, 151, 169, 152];
  const removed  = [37, 30, 65, 35, 57, 44, 79, 49, 58, 72, 60, 95, 87, 89, 62, 62, 122, 96, 65, 76, 94, 106];

  const gradRec = ctxNegative.createLinearGradient(0, 0, 0, 400);
  gradRec.addColorStop(0, 'rgba(231, 76, 60, 0.4)');
  gradRec.addColorStop(1, 'rgba(231, 76, 60, 0)');

  const gradRem = ctxNegative.createLinearGradient(0, 0, 0, 400);
  gradRem.addColorStop(0, 'rgba(46, 204, 113, 0.4)');
  gradRem.addColorStop(1, 'rgba(46, 204, 113, 0)');

  new Chart(ctxNegative, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Received',
          data: received,
          fill: true,
          backgroundColor: gradRec,
          borderColor: '#e74c3c',
          tension: 0.3,
          pointRadius: 3
        },
        {
          label: 'Removed',
          data: removed,
          fill: true,
          backgroundColor: gradRem,
          borderColor: '#2ecc71',
          tension: 0.3,
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Review Count' }
        }
      }
    }
  });
});
