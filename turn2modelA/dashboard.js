// Sample data (you would typically fetch this from an API)
const data = [
    { date: '2023-01-01', backlog: 10, reviewTime: 5, optimization: 8 },
    { date: '2023-02-01', backlog: 15, reviewTime: 4, optimization: 6 },
    { date: '2023-03-01', backlog: 20, reviewTime: 6, optimization: 7 },
    { date: '2023-04-01', backlog: 25, reviewTime: 8, optimization: 5 },
    { date: '2023-05-01', backlog: 30, reviewTime: 7, optimization: 4 },
];

// Function to render all charts
function renderCharts(filteredData) {
    const dates = filteredData.map(entry => entry.date);
    const backlogs = filteredData.map(entry => entry.backlog);
    const reviewTimes = filteredData.map(entry => entry.reviewTime);
    const optimizations = filteredData.map(entry => entry.optimization);

    const charts = [];

    // Backlog Size Chart
    charts.push({
        x: dates,
        y: backlogs,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Backlog Size',
    });

    // Review Time Chart
    charts.push({
        x: dates,
        y: reviewTimes,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Review Time (days)',
    });

    // Optimization Impact Chart
    charts.push({
        x: dates,
        y: optimizations,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Optimization Impact',
    });

    const layout = {
        title: 'Code Review Dashboard',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Count / Days' },
    };

    // Create subplots
    const fig = {
        data: charts,
        layout: layout,
    };

    Plotly.newPlot('charts', fig);
}

// Function to filter data based on date range
function filterData() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    const filteredData = data.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= startDate && entryDate <= endDate;
    });

    renderCharts(filteredData);
}

// Initial render
renderCharts(data);

// Event listener for filtering
document.getElementById('filter-button').addEventListener('click', filterData);
