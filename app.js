// Dashboard Data
const dashboardData = {
  overview: {
    total_applicants: 131,
    total_jobs: 12,
    avg_applicants_per_job: 10.92,
    team_name: 'CT05, SYNERGY HomeCare of Fairfield',
    data_period: 'October 2025'
  },
  
  by_job_title: [
    { title: 'Caregiver CNA HHA', applicants: 26 },
    { title: 'Caregiver', applicants: 10 },
    { title: 'Weekend Caregiver CNA HHA', applicants: 10 },
    { title: 'Babysitter', applicants: 8 },
    { title: 'Live in Caregiver', applicants: 5 },
    { title: 'Weekend Caregiver', applicants: 2 }
  ],
  
  by_city: [
    { city: 'Trumbull', applicants: 37 },
    { city: 'Bridgeport', applicants: 26 },
    { city: 'Milford', applicants: 17 },
    { city: 'New Haven', applicants: 16 },
    { city: 'Ansonia', applicants: 10 },
    { city: 'Huntington', applicants: 10 },
    { city: 'Easton', applicants: 8 },
    { city: 'Fairfield', applicants: 7 }
  ],
  
  by_source: [
    { source: 'Indeed', applicants: 98 },
    { source: 'Ziprecruiter', applicants: 14 },
    { source: 'Intelycare', applicants: 6 },
    { source: 'Indeed Sponsored', applicants: 4 },
    { source: 'Call In', applicants: 3 },
    { source: 'My Job Helper', applicants: 2 },
    { source: 'Unknown', applicants: 2 },
    { source: 'Referral', applicants: 1 },
    { source: 'Other Job Board', applicants: 1 }
  ],
  
  monthly_by_job_title: [
    { title: 'Caregiver CNA HHA', applicants: 52 },
    { title: 'Babysitter', applicants: 24 },
    { title: 'Live in Caregiver', applicants: 22 },
    { title: 'Weekend Caregiver', applicants: 12 },
    { title: 'Caregiver', applicants: 11 },
    { title: 'Weekend Caregiver CNA HHA', applicants: 10 }
  ],
  
  detailed_jobs: [
    { title: 'Babysitter', city: 'Easton', state: 'CT', applicants: 8 },
    { title: 'General Posting', city: 'New Haven', state: 'CT', applicants: 16 },
    { title: 'Caregiver', city: 'Ansonia', state: 'CT', applicants: 10 },
    { title: 'General Posting', city: 'Milford', state: 'CT', applicants: 1 },
    { title: 'Caregiver CNA HHA', city: 'Bridgeport', state: 'CT', applicants: 26 },
    { title: 'General Posting', city: 'Huntington', state: 'CT', applicants: 10 },
    { title: 'General Posting', city: 'Milford', state: 'CT', applicants: 16 },
    { title: 'Live in Caregiver', city: 'Fairfield', state: 'CT', applicants: 5 },
    { title: 'General Posting', city: 'Trumbull', state: 'Connecticut', applicants: 17 },
    { title: 'Weekend Caregiver', city: 'Fairfield', state: 'CT', applicants: 2 },
    { title: 'General Posting', city: 'Trumbull', state: 'Connecticut', applicants: 10 },
    { title: 'Weekend Caregiver CNA HHA', city: 'Trumbull', state: 'Connecticut', applicants: 10 }
  ]
};

// Chart colors (using healthcare-friendly blue palette)
const chartColors = [
  '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', 
  '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'
];

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
  initializeCharts();
  populateJobsTable();
  initializeTableSort();
  initializeSearch();
  updateLastUpdated();
});

// Chart initialization
function initializeCharts() {
  createJobTitleChart();
  createCityChart();
  createSourceChart();
  createMonthlyChart();
}

// Job Title Chart (Horizontal Bar)
function createJobTitleChart() {
  const ctx = document.getElementById('jobTitleChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashboardData.by_job_title.map(item => item.title),
      datasets: [{
        label: 'Number of Applicants',
        data: dashboardData.by_job_title.map(item => item.applicants),
        backgroundColor: chartColors[0],
        borderColor: chartColors[0],
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          callbacks: {
            label: function(context) {
              return `${context.parsed.x} applicants`;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
    }
  });
}

// City Chart (Column Chart)
function createCityChart() {
  const ctx = document.getElementById('cityChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashboardData.by_city.map(item => item.city),
      datasets: [{
        label: 'Number of Applicants',
        data: dashboardData.by_city.map(item => item.applicants),
        backgroundColor: chartColors[1],
        borderColor: chartColors[1],
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          callbacks: {
            label: function(context) {
              return `${context.parsed.y} applicants`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        }
      }
    }
  });
}

// Source Chart (Donut Chart)
function createSourceChart() {
  const ctx = document.getElementById('sourceChart').getContext('2d');
  
  const total = dashboardData.by_source.reduce((sum, item) => sum + item.applicants, 0);
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: dashboardData.by_source.map(item => item.source),
      datasets: [{
        data: dashboardData.by_source.map(item => item.applicants),
        backgroundColor: chartColors,
        borderColor: '#fff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          callbacks: {
            label: function(context) {
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${context.label}: ${context.parsed} (${percentage}%)`;
            }
          }
        }
      },
      cutout: '60%'
    }
  });
}

// Monthly Chart (Bar Chart)
function createMonthlyChart() {
  const ctx = document.getElementById('monthlyChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashboardData.monthly_by_job_title.map(item => item.title),
      datasets: [{
        label: 'October 2025 Applicants',
        data: dashboardData.monthly_by_job_title.map(item => item.applicants),
        backgroundColor: chartColors[2],
        borderColor: chartColors[2],
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          callbacks: {
            label: function(context) {
              return `${context.parsed.y} applicants`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            maxRotation: 45
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        }
      }
    }
  });
}

// Populate Jobs Table
function populateJobsTable() {
  const tbody = document.getElementById('jobsTableBody');
  const jobsData = dashboardData.detailed_jobs;
  
  tbody.innerHTML = '';
  
  jobsData.forEach(job => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${job.title || 'General Posting'}</td>
      <td>${job.city}</td>
      <td>${job.state}</td>
      <td>${job.applicants}</td>
    `;
    tbody.appendChild(row);
  });
}

// Table sorting functionality
let currentSort = { column: null, direction: 'asc' };

function initializeTableSort() {
  const headers = document.querySelectorAll('.jobs-table th[data-sort]');
  
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const sortBy = header.getAttribute('data-sort');
      sortTable(sortBy);
      updateSortIcons(header);
    });
  });
}

function sortTable(column) {
  const tbody = document.getElementById('jobsTableBody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  // Determine sort direction
  if (currentSort.column === column) {
    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
  } else {
    currentSort.direction = 'asc';
  }
  currentSort.column = column;
  
  // Sort rows
  rows.sort((a, b) => {
    let aValue, bValue;
    
    switch (column) {
      case 'title':
        aValue = a.cells[0].textContent.toLowerCase();
        bValue = b.cells[0].textContent.toLowerCase();
        break;
      case 'city':
        aValue = a.cells[1].textContent.toLowerCase();
        bValue = b.cells[1].textContent.toLowerCase();
        break;
      case 'state':
        aValue = a.cells[2].textContent.toLowerCase();
        bValue = b.cells[2].textContent.toLowerCase();
        break;
      case 'applicants':
        aValue = parseInt(a.cells[3].textContent);
        bValue = parseInt(b.cells[3].textContent);
        break;
    }
    
    if (currentSort.direction === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });
  
  // Re-append sorted rows
  rows.forEach(row => tbody.appendChild(row));
}

function updateSortIcons(activeHeader) {
  // Reset all icons
  document.querySelectorAll('.jobs-table th i').forEach(icon => {
    icon.className = 'fas fa-sort';
  });
  
  // Update active header icon
  const icon = activeHeader.querySelector('i');
  if (currentSort.direction === 'asc') {
    icon.className = 'fas fa-sort-up';
  } else {
    icon.className = 'fas fa-sort-down';
  }
}

// Search functionality
function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterTable(searchTerm);
  });
}

function filterTable(searchTerm) {
  const tbody = document.getElementById('jobsTableBody');
  const rows = tbody.querySelectorAll('tr');
  
  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    const rowText = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' ');
    
    if (rowText.includes(searchTerm)) {
      row.classList.remove('hidden');
    } else {
      row.classList.add('hidden');
    }
  });
}

// Export functionality
document.getElementById('exportBtn').addEventListener('click', () => {
  window.print();
});

// Update last updated timestamp
function updateLastUpdated() {
  const now = new Date();
  const timestamp = now.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  document.getElementById('lastUpdated').textContent = timestamp;
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});