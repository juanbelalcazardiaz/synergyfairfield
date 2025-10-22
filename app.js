// Dashboard Application
class RecruitmentDashboard {
    constructor() {
        this.data = {
            keyMetrics: {
                ytdApplications: 2497,
                ytdInterviews: 611,
                ytdOffers: 131,
                ytdHires: 44,
                interviewRate: 24.5,
                offerRate: 21.4,
                hireRate: 33.6,
                appToHireRate: 1.8
            },
            monthlyApplications: [
                { month: '2025-01', monthName: 'January 2025', applications: 142 },
                { month: '2025-02', monthName: 'February 2025', applications: 262 },
                { month: '2025-03', monthName: 'March 2025', applications: 343 },
                { month: '2025-04', monthName: 'April 2025', applications: 303 },
                { month: '2025-05', monthName: 'May 2025', applications: 355 },
                { month: '2025-06', monthName: 'June 2025', applications: 383 },
                { month: '2025-07', monthName: 'July 2025', applications: 237 },
                { month: '2025-08', monthName: 'August 2025', applications: 178 },
                { month: '2025-09', monthName: 'September 2025', applications: 152 },
                { month: '2025-10', monthName: 'October 2025', applications: 142 }
            ],
            weeklyApplications: [
                { week: '2024-12-29', month: '2025-01', applications: 18 },
                { week: '2025-01-05', month: '2025-01', applications: 57 },
                { week: '2025-01-12', month: '2025-01', applications: 24 },
                { week: '2025-01-19', month: '2025-01', applications: 27 },
                { week: '2025-01-26', month: '2025-01', applications: 16 },
                { week: '2025-01-26', month: '2025-02', applications: 4 },
                { week: '2025-02-02', month: '2025-02', applications: 44 },
                { week: '2025-02-09', month: '2025-02', applications: 106 },
                { week: '2025-02-16', month: '2025-02', applications: 58 },
                { week: '2025-02-23', month: '2025-02', applications: 50 },
                { week: '2025-02-23', month: '2025-03', applications: 11 },
                { week: '2025-03-02', month: '2025-03', applications: 43 },
                { week: '2025-03-09', month: '2025-03', applications: 158 },
                { week: '2025-03-16', month: '2025-03', applications: 85 },
                { week: '2025-03-23', month: '2025-03', applications: 36 },
                { week: '2025-03-30', month: '2025-03', applications: 10 },
                { week: '2025-03-30', month: '2025-04', applications: 20 },
                { week: '2025-04-06', month: '2025-04', applications: 72 },
                { week: '2025-04-13', month: '2025-04', applications: 100 },
                { week: '2025-04-20', month: '2025-04', applications: 72 },
                { week: '2025-04-27', month: '2025-04', applications: 39 },
                { week: '2025-05-04', month: '2025-05', applications: 66 },
                { week: '2025-05-11', month: '2025-05', applications: 132 },
                { week: '2025-05-18', month: '2025-05', applications: 60 },
                { week: '2025-05-25', month: '2025-05', applications: 97 },
                { week: '2025-06-01', month: '2025-06', applications: 95 },
                { week: '2025-06-08', month: '2025-06', applications: 88 },
                { week: '2025-06-15', month: '2025-06', applications: 82 },
                { week: '2025-06-22', month: '2025-06', applications: 59 },
                { week: '2025-06-29', month: '2025-06', applications: 59 },
                { week: '2025-07-06', month: '2025-07', applications: 85 },
                { week: '2025-07-13', month: '2025-07', applications: 60 },
                { week: '2025-07-20', month: '2025-07', applications: 60 },
                { week: '2025-07-27', month: '2025-07', applications: 32 },
                { week: '2025-08-03', month: '2025-08', applications: 58 },
                { week: '2025-08-10', month: '2025-08', applications: 43 },
                { week: '2025-08-17', month: '2025-08', applications: 36 },
                { week: '2025-08-24', month: '2025-08', applications: 37 },
                { week: '2025-08-31', month: '2025-08', applications: 4 },
                { week: '2025-08-31', month: '2025-09', applications: 27 },
                { week: '2025-09-07', month: '2025-09', applications: 41 },
                { week: '2025-09-14', month: '2025-09', applications: 26 },
                { week: '2025-09-21', month: '2025-09', applications: 43 },
                { week: '2025-09-28', month: '2025-09', applications: 15 },
                { week: '2025-09-28', month: '2025-10', applications: 21 },
                { week: '2025-10-05', month: '2025-10', applications: 23 },
                { week: '2025-10-12', month: '2025-10', applications: 54 },
                { week: '2025-10-19', month: '2025-10', applications: 44 }
            ],
            applicationSources: [
                { source: 'Career Page', applications: 47, interviews: 13, offers: 7, hires: 4 },
                { source: 'Indeed', applications: 2225, interviews: 531, offers: 86, hires: 28 },
                { source: 'Intelycare', applications: 11, interviews: 3, offers: 0, hires: 0 },
                { source: 'Other Job Board', applications: 1, interviews: 0, offers: 0, hires: 0 },
                { source: 'Ziprecruiter', applications: 95, interviews: 20, offers: 5, hires: 3 },
                { source: 'Indeed Sponsored', applications: 4, interviews: 0, offers: 0, hires: 0 },
                { source: 'Call In', applications: 38, interviews: 19, offers: 19, hires: 4 },
                { source: 'Company Profile Page', applications: 9, interviews: 0, offers: 0, hires: 0 },
                { source: 'Email Marketing', applications: 1, interviews: 0, offers: 0, hires: 0 },
                { source: 'Job Fair', applications: 2, interviews: 0, offers: 0, hires: 0 },
                { source: 'My Job Helper', applications: 8, interviews: 3, offers: 0, hires: 0 },
                { source: 'Other', applications: 5, interviews: 1, offers: 1, hires: 0 },
                { source: 'Referral', applications: 15, interviews: 7, offers: 7, hires: 3 },
                { source: 'Rehire', applications: 1, interviews: 1, offers: 1, hires: 0 },
                { source: 'Unknown', applications: 30, interviews: 12, offers: 4, hires: 1 },
                { source: 'Walk In', applications: 2, interviews: 0, offers: 0, hires: 0 },
                { source: 'Automated Candidate Engagement', applications: 1, interviews: 0, offers: 0, hires: 0 },
                { source: 'Resume Uploader', applications: 2, interviews: 1, offers: 1, hires: 1 }
            ],
            jobTitles: [
                { title: 'Caregiver', applicants: 705 },
                { title: 'Live in Caregiver', applicants: 349 },
                { title: 'Morning Caregiver', applicants: 314 },
                { title: 'Weekend Caregiver', applicants: 287 },
                { title: 'Caregiver CNA HHA', applicants: 258 },
                { title: 'Weekend Caregiver CNA HHA', applicants: 239 },
                { title: 'Live-In Caregiver Weekend', applicants: 209 },
                { title: 'Babysitter', applicants: 54 },
                { title: 'Caregivers', applicants: 35 },
                { title: 'Certified Nursing Assistant (CNA)', applicants: 34 }
            ],
            applicantStatus: [
                { status: 'No Offer Made', count: 815 },
                { status: 'Not Qualified', count: 730 },
                { status: 'No Response', count: 474 },
                { status: 'Duplicate Application', count: 308 },
                { status: 'Hired', count: 43 },
                { status: 'Requested Interview', count: 23 },
                { status: 'Future Consideration', count: 20 },
                { status: 'In Communication', count: 19 },
                { status: 'Viewed', count: 12 },
                { status: 'Interview No-Show', count: 12 },
                { status: 'Initial Contact Attempted', count: 11 },
                { status: 'Interview Cancelled', count: 6 },
                { status: '2nd Contact Attempted', count: 6 },
                { status: 'Orientation Scheduled', count: 4 },
                { status: 'Missed Orientation', count: 3 },
                { status: 'Interview Scheduled', count: 3 },
                { status: 'Interview Rescheduled', count: 3 },
                { status: 'Documents Signed', count: 2 },
                { status: '3rd Contact Attempted', count: 2 },
                { status: 'Offer Rejected', count: 1 }
            ],
            monthlyInterviews: [
                { month: '2025-01', monthName: 'January 2025', interviews: 11 },
                { month: '2025-02', monthName: 'February 2025', interviews: 12 },
                { month: '2025-03', monthName: 'March 2025', interviews: 12 },
                { month: '2025-04', monthName: 'April 2025', interviews: 17 },
                { month: '2025-05', monthName: 'May 2025', interviews: 15 },
                { month: '2025-06', monthName: 'June 2025', interviews: 14 },
                { month: '2025-07', monthName: 'July 2025', interviews: 8 },
                { month: '2025-08', monthName: 'August 2025', interviews: 4 },
                { month: '2025-09', monthName: 'September 2025', interviews: 5 },
                { month: '2025-10', monthName: 'October 2025', interviews: 2 }
            ]
        };
        
        this.charts = {};
        this.chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderCharts();
        this.populateSourceTable();
        this.setCurrentDate();
    }

    setupEventListeners() {
        // View toggle buttons
        document.getElementById('ytdView').addEventListener('click', () => {
            this.switchView('ytd');
        });

        document.getElementById('monthlyView').addEventListener('click', () => {
            this.switchView('monthly');
        });

        // Month filter for weekly chart
        document.getElementById('monthFilter').addEventListener('change', (e) => {
            this.updateWeeklyChart(e.target.value);
        });
    }

    switchView(view) {
        const ytdBtn = document.getElementById('ytdView');
        const monthlyBtn = document.getElementById('monthlyView');
        
        if (view === 'ytd') {
            ytdBtn.classList.add('active');
            ytdBtn.classList.remove('btn--secondary');
            ytdBtn.classList.add('btn--primary');
            monthlyBtn.classList.remove('active');
            monthlyBtn.classList.remove('btn--primary');
            monthlyBtn.classList.add('btn--secondary');
        } else {
            monthlyBtn.classList.add('active');
            monthlyBtn.classList.remove('btn--secondary');
            monthlyBtn.classList.add('btn--primary');
            ytdBtn.classList.remove('active');
            ytdBtn.classList.remove('btn--primary');
            ytdBtn.classList.add('btn--secondary');
        }
        
        // Here you could add logic to show/hide different sections based on view
    }

    formatNumber(num) {
        return new Intl.NumberFormat().format(num);
    }

    formatPercentage(num) {
        return `${num.toFixed(1)}%`;
    }

    renderCharts() {
        this.renderMonthlyTrendChart();
        this.renderWeeklyChart();
        this.renderSourcesChart();
        this.renderJobTitlesChart();
        this.renderStatusChart();
        this.renderInterviewComparisonChart();
    }

    renderMonthlyTrendChart() {
        const ctx = document.getElementById('monthlyTrendChart').getContext('2d');
        
        this.charts.monthlyTrend = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.data.monthlyApplications.map(item => item.monthName.split(' ')[0]),
                datasets: [{
                    label: 'Applications',
                    data: this.data.monthlyApplications.map(item => item.applications),
                    borderColor: this.chartColors[0],
                    backgroundColor: this.chartColors[0] + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: this.chartColors[0],
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6
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
                        callbacks: {
                            label: (context) => {
                                return `Applications: ${this.formatNumber(context.raw)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: (value) => this.formatNumber(value)
                        }
                    }
                }
            }
        });
    }

    renderWeeklyChart(monthFilter = 'all') {
        const ctx = document.getElementById('weeklyChart').getContext('2d');
        
        let filteredData = this.data.weeklyApplications;
        if (monthFilter !== 'all') {
            filteredData = this.data.weeklyApplications.filter(item => item.month === monthFilter);
        }

        if (this.charts.weekly) {
            this.charts.weekly.destroy();
        }

        this.charts.weekly = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: filteredData.map(item => {
                    const date = new Date(item.week);
                    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                }),
                datasets: [{
                    label: 'Weekly Applications',
                    data: filteredData.map(item => item.applications),
                    backgroundColor: this.chartColors[1],
                    borderColor: this.chartColors[1],
                    borderWidth: 1
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
                        callbacks: {
                            label: (context) => {
                                return `Applications: ${this.formatNumber(context.raw)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: (value) => this.formatNumber(value)
                        }
                    }
                }
            }
        });
    }

    updateWeeklyChart(monthFilter) {
        this.renderWeeklyChart(monthFilter);
    }

    renderSourcesChart() {
        const ctx = document.getElementById('sourcesChart').getContext('2d');
        
        // Get top 8 sources by applications
        const topSources = this.data.applicationSources
            .sort((a, b) => b.applications - a.applications)
            .slice(0, 8);

        this.charts.sources = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: topSources.map(item => item.source),
                datasets: [{
                    data: topSources.map(item => item.applications),
                    backgroundColor: this.chartColors.slice(0, topSources.length),
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const percentage = ((context.raw / this.data.keyMetrics.ytdApplications) * 100).toFixed(1);
                                return `${context.label}: ${this.formatNumber(context.raw)} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    renderJobTitlesChart() {
        const ctx = document.getElementById('jobTitlesChart').getContext('2d');
        
        this.charts.jobTitles = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.data.jobTitles.map(item => {
                    // Truncate long titles
                    return item.title.length > 20 ? item.title.substring(0, 17) + '...' : item.title;
                }),
                datasets: [{
                    label: 'Applicants',
                    data: this.data.jobTitles.map(item => item.applicants),
                    backgroundColor: this.chartColors[2],
                    borderColor: this.chartColors[2],
                    borderWidth: 1
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
                        callbacks: {
                            title: (context) => {
                                return this.data.jobTitles[context[0].dataIndex].title;
                            },
                            label: (context) => {
                                return `Applicants: ${this.formatNumber(context.raw)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            callback: (value) => this.formatNumber(value)
                        }
                    }
                }
            }
        });
    }

    renderStatusChart() {
        const ctx = document.getElementById('statusChart').getContext('2d');
        
        // Get top 10 statuses
        const topStatuses = this.data.applicantStatus.slice(0, 10);

        this.charts.status = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: topStatuses.map(item => item.status),
                datasets: [{
                    data: topStatuses.map(item => item.count),
                    backgroundColor: this.chartColors,
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            generateLabels: (chart) => {
                                const data = chart.data;
                                return data.labels.map((label, i) => ({
                                    text: label.length > 15 ? label.substring(0, 12) + '...' : label,
                                    fillStyle: data.datasets[0].backgroundColor[i],
                                    strokeStyle: data.datasets[0].backgroundColor[i],
                                    pointStyle: 'circle'
                                }));
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const total = this.data.applicantStatus.reduce((sum, item) => sum + item.count, 0);
                                const percentage = ((context.raw / total) * 100).toFixed(1);
                                return `${context.label}: ${this.formatNumber(context.raw)} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    renderInterviewComparisonChart() {
        const ctx = document.getElementById('interviewComparisonChart').getContext('2d');
        
        this.charts.interviewComparison = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.data.monthlyApplications.map(item => item.monthName.split(' ')[0]),
                datasets: [
                    {
                        label: 'Applications',
                        data: this.data.monthlyApplications.map(item => item.applications),
                        borderColor: this.chartColors[0],
                        backgroundColor: this.chartColors[0] + '20',
                        yAxisID: 'y'
                    },
                    {
                        label: 'Interviews',
                        data: this.data.monthlyInterviews.map(item => item.interviews),
                        borderColor: this.chartColors[4],
                        backgroundColor: this.chartColors[4] + '20',
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                return `${context.dataset.label}: ${this.formatNumber(context.raw)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Applications'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Interviews'
                        },
                        grid: {
                            drawOnChartArea: false,
                        },
                    }
                }
            }
        });
    }

    populateSourceTable() {
        const tbody = document.getElementById('sourceTableBody');
        
        // Sort sources by applications (descending)
        const sortedSources = this.data.applicationSources
            .sort((a, b) => b.applications - a.applications)
            .filter(source => source.applications > 0); // Only show sources with applications

        sortedSources.forEach(source => {
            const row = document.createElement('tr');
            
            const interviewRate = source.applications > 0 ? (source.interviews / source.applications * 100) : 0;
            const offerRate = source.interviews > 0 ? (source.offers / source.interviews * 100) : 0;
            const hireRate = source.offers > 0 ? (source.hires / source.offers * 100) : 0;
            const appToHireRate = source.applications > 0 ? (source.hires / source.applications * 100) : 0;
            
            row.innerHTML = `
                <td><strong>${source.source}</strong></td>
                <td class="number">${this.formatNumber(source.applications)}</td>
                <td class="number">${this.formatNumber(source.interviews)}</td>
                <td class="number">${this.formatNumber(source.offers)}</td>
                <td class="number">${this.formatNumber(source.hires)}</td>
                <td class="number percentage ${this.getPercentageClass(interviewRate)}">${this.formatPercentage(interviewRate)}</td>
                <td class="number percentage ${this.getPercentageClass(offerRate)}">${this.formatPercentage(offerRate)}</td>
                <td class="number percentage ${this.getPercentageClass(hireRate)}">${this.formatPercentage(hireRate)}</td>
                <td class="number percentage ${this.getPercentageClass(appToHireRate)}">${this.formatPercentage(appToHireRate)}</td>
            `;
            
            tbody.appendChild(row);
        });
    }

    getPercentageClass(percentage) {
        if (percentage === 0) return 'very-low';
        if (percentage < 10) return 'low';
        return '';
    }

    setCurrentDate() {
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        document.getElementById('currentDate').textContent = currentDate;
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RecruitmentDashboard();
});