import DataAsJson from './data.json' with { type: 'json' };

let StartFunc = () => {
    const calendarEl = document.getElementById('calendar');

    jVarGlobalCalendar = new FullCalendar.Calendar(calendarEl, {
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
        dateClick: function (info) {
            document.getElementById('eventDate').value = info.dateStr;
            new bootstrap.Modal(document.getElementById('eventModal')).show();
        },
        eventClick: function (info) {
            const confirmDelete = confirm(`Delete event: "${info.event.title}"?\nDate: ${info.event.startStr}`);
            if (confirmDelete) {
                info.event.remove();
            }
        }
    });

    jVarGlobalCalendar.render();

    // Handle form submission
    document.getElementById('eventForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('eventTitle').value;
        const date = document.getElementById('eventDate').value;
        const desc = document.getElementById('eventDesc').value;

        if (title && date) {
            jVarGlobalCalendar.addEvent({
                title: title,
                start: date,
                description: desc,
                className: 'bg-info'
            });

            bootstrap.Modal.getInstance(document.getElementById('eventModal')).hide();
            this.reset();
        }
    });
};

export { StartFunc };
