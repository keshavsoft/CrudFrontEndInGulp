import DataAsJson from './data.json' with { type: 'json' };

let StartFunc = () => {
    const calendarEl = document.getElementById('calendar');

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    jVarGlobalCalendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: today,
        initialView: 'timeGridDay',
        editable: true,
        selectable: true,
        businessHours: true,
        dayMaxEvents: true,
        events: DataAsJson,
        headerToolbar: {
            left: 'title',
            center: '',
            right: 'today prev,next'
        },
        eventClick: function(info) {
            alert(`Title: ${info.event.title}\nDate: ${info.event.startStr}`);
        }
    });

    jVarGlobalCalendar.render();
};

export { StartFunc };
