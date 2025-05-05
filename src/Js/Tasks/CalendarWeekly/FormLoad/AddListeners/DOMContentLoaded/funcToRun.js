import DataAsJson from './data.json' with { type: 'json' };

let StartFunc = () => {
    const calendarEl = document.getElementById('calendar');

    const today = new Date().toISOString().slice(0, 10);

    jVarGlobalCalendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: today,
        initialView: 'timeGridWeek',
        editable: true,
        selectable: true,
        businessHours: true,
        dayMaxEvents: true,
        events: DataAsJson,
        headerToolbar: {
            left: 'title',
            center: '',
            right: 'prev,next today'
        },
        eventClick: function(info) {
            alert(`Title: ${info.event.title}\nDate: ${info.event.startStr}`);
        }
    });

    jVarGlobalCalendar.render();
};

export { StartFunc };
