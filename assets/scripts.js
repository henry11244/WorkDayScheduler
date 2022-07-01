var schedule = $('#schedule')
var saveBox = $('#saveBox')
var sche = document.querySelector('#schedule')
var timeBlock = document.querySelector('.container')
var currentTime = moment()
var currentDay = moment().format('MMMDDYY')


var WorkdayActivities = []
if (JSON.parse(localStorage.getItem('WorkdayActivities') !== null)) { WorkdayActivities = JSON.parse(localStorage.getItem('WorkdayActivities')) }
// var Saved = localStorage.getItem.parse('saved')
console.log(currentTime.format('MMM'))
var timeslot = []

for (var i = 0; i < 24; i++) {
    var hourBox = $('<div>').addClass('col-12 saveBox').attr('style', 'display:flex');
    var timeSpan = $('<span>').addClass('col-1');
    var saveIcon = $('<button>').addClass('col-1 fas fa-save d-flex justify-content-center');
    timeSpan.text(i + ":00");
    var inputBox = $('<input>').addClass("col-8").attr('type', 'text').attr('id', i + currentDay)
    schedule.append(hourBox.append(timeSpan).append(inputBox).append(saveIcon));
    // timeslot[i] = $(`#box${i}${currentTime.format('MMMdoYY')}`)
}

var newArray = []
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

$('.saveBox').on('click', '.fa-save', saveData);



function search(key, objects) {


}

for (var i = 0; i < 24; i++) {
    for (var x = 0; x < WorkdayActivities.length; x++)
        if (document.getElementById(`${i}${currentDay}`).id === WorkdayActivities[x].inputId) {
            document.getElementById(`${i}${currentDay}`).setAttribute('value', WorkdayActivities[x].inputValue)
        }
}



// for (var i = 0; i < 24; i++) {
//     var timeVariable = timeslot[i];
//     timeVariable.addEventListener('click', (event) => {
//         const isButton = event.target.nodeName === 'BUTTON';
//         if (!isButton) {
//             console.log('test');
//         }
//     })
// }

// $('.timeslot').on('click', console.log('test'))


// }
// // // schedule.children().children().children().attr('value', 'test')
// // // hourBox.click(console.log('test'))
// // var test = document.querySelector('#Box0Jun4th22')
// // test.addEventListener('click', function () { console.log(this.parent().children().eq(1).value()) })