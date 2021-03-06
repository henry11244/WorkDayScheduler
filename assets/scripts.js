// defining variables that are used in functions below
var schedule = $('#schedule')
var saveBox = $('#saveBox')
var sche = document.querySelector('#schedule')
var timeBlock = $('#currentDay')
var currentTime = moment()
var currentDay = moment().format('MMMDDYY')
var currentHour = moment().hour()

// interval for refreshing clock and colors
setInterval(function () {
    timeBlock.text(moment());
    // color for timeblocks
    for (var i = 0; i < 24; i++) {
        if (i < currentHour) {
            document.querySelector(`[name="${i}"]`).setAttribute('style', 'background-color: rgb(75, 75, 75)')
        } else if (i < 9 || i > 17) {
            document.querySelector(`[name="${i}"]`).setAttribute('style', 'background-color: rgb(180, 179, 179)')
        } else if (i == currentHour) { document.querySelector(`[name="${i}"]`).setAttribute('style', 'background-color: rgb(215, 0, 0)') }
        else { document.querySelector(`[name="${i}"]`).setAttribute('style', 'background-color: rgb(0, 241, 0)') };
    }
}, 100)

// Pulls saved data from local storage
var WorkdayActivities = []
if (JSON.parse(localStorage.getItem('WorkdayActivities') !== null)) { WorkdayActivities = JSON.parse(localStorage.getItem('WorkdayActivities')) }

// Function to populate time container
for (var i = 0; i < 24; i++) {
    var hourBox = $('<div>').addClass('col-12 saveBox ml-2').attr('style', 'display:flex').attr('id', i);
    var timeSpan = $('<span>').addClass('col-1');
    var saveIcon = $('<button>').addClass('col-1 fas fa-save d-flex justify-content-center align-items-center save');
    timeSpan.text(i + ":00").addClass('d-flex justify-content-center align-items-center font-weight-bold');
    var inputBox = $('<input>').addClass(`col-10`).attr('type', 'text').attr('id', i + currentDay).attr('name', i)
    schedule.append(hourBox.append(timeSpan).append(inputBox).append(saveIcon));
}

// Function to save data in local storage on clicking save
function saveData(e) {
    e.preventDefault();
    var clicked = $(e.target);
    console.log(clicked);
    var inputValue = $(this).prev('input').val()
    var inputId = $(this).prev('input').attr('id')
    console.log(inputId)
    newObject = { inputId, inputValue }
    WorkdayActivities.push(newObject)
    localStorage.setItem('WorkdayActivities', JSON.stringify(WorkdayActivities));
}

// trigger event for save button
$('.saveBox').on('click', '.fa-save', saveData);

// For loop to repopulate saved data on page refresh
for (var i = 0; i < 24; i++) {
    for (var x = 0; x < WorkdayActivities.length; x++)
        if (document.getElementById(`${i}${currentDay}`).id === WorkdayActivities[x].inputId) {
            document.getElementById(`${i}${currentDay}`).setAttribute('value', WorkdayActivities[x].inputValue)
        }
}

// weather widget, codes below obtained from 'weatherwidget.io'
!function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) {
        js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'weatherwidget-io-js');
