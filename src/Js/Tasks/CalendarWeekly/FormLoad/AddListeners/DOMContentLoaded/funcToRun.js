import DataAsJson from './data.json' with {type: 'json'};

let StartFunc = () => {
    var calendarEl = document.getElementById('calendar');

    let today = new Date().toISOString().slice(0, 10)

    jVarGlobalCalendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: today,
        editable: true,
        selectable: true,
        businessHours: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: DataAsJson
    });

    jVarGlobalCalendar.render();
};

export { StartFunc };