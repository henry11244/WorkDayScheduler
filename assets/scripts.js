// defining variables that are used in functions below
var schedule = $('#schedule')
var saveBox = $('#saveBox')
var sche = document.querySelector('#schedule')
var timeBlock = document.querySelector('.container')
var currentTime = moment()
var currentDay = moment().format('MMMDDYY')
var currentHour = currentTime.format('hh')

// Pulls saved data from local storage
var WorkdayActivities = []
if (JSON.parse(localStorage.getItem('WorkdayActivities') !== null)) { WorkdayActivities = JSON.parse(localStorage.getItem('WorkdayActivities')) }

// Function to populate time container
for (var i = 0; i < 24; i++) {
    var hourBox = $('<div>').addClass('col-12 saveBox').attr('style', 'display:flex').attr('id', i);
    var timeSpan = $('<span>').addClass('col-1');
    var saveIcon = $('<button>').addClass('col-1 fas fa-save d-flex justify-content-center');
    timeSpan.text(i + ":00");
    var inputBox = $('<input>').addClass(`col-8`).attr('type', 'text').attr('id', i + currentDay).attr('name', i)
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

for (var i = 0; i < 24; i++) {
    if (i < 9 || i > 17) {
        document.querySelector(`[name="${i}"]`).setAttribute('style', 'background-color: grey')
    }
    else if (i < currentHour) {
        document.querySelector(`[name="${i}"]`).setAttribute('style', 'background-color: grey')
    } else if (i == currentHour) { document.querySelector(`[name="${i}"]`).setAttribute('style', 'background-color: red') }
    else { document.querySelector(`[name="${i}"]`).setAttribute('style', 'background-color: green') };

}