import DataAsJson from './data.json' with { type: 'json' };

let StartFunc = () => {
    const labels = DataAsJson.map(item => item.month);
    const dataCounts = DataAsJson.map(item => item.count);

    const ctx = document.getElementById('lineChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Events Scheduled',
                data: dataCounts,
                borderColor: '#1abc9c',
                backgroundColor: 'rgba(26, 188, 156, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
};

export { StartFunc };
