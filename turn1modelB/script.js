// Assuming the 'data' array is defined with sample data points
// Sample dummy data
const data = [
    { date: '2023-01-01', reviewBacklog: 20, optimizationScore: 70 },
    { date: '2023-01-08', reviewBacklog: 25, optimizationScore: 68 },
    { date: '2023-01-15', reviewBacklog: 30, optimizationScore: 65 },
    // Add more data points for your historical period
];
// Function to parse the date strings
function parseDate(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
}

// Using Chart.js to create a line chart
function createVisualization() {
    const ctx = document.getElementById('canvas').getContext('2d');

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(p => p.date),
            datasets: [
                {
                    label: 'Review Backlog',
                    data: data.map(p => p.reviewBacklog),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Code Optimization Score',
                    data: data.map(p => p.optimizationScore),
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                }
            ]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        parser: 'YYYY-MM-DD',
                    },
                    displayFormats: {
                        'day': 'YYYY-MM-DD'
                    },
                },
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    display: true,
                    mode: 'index',
                    intersect: false,
                }
            }
        }
    });
}

createVisualization();
