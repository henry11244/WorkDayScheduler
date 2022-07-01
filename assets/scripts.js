var schedule = $('#schedule')
var saveBox = $('#saveBox')
var sche = document.querySelector('#schedule')
var currentTime = moment()

var activity = []
if (JSON.parse(localStorage.getItem('activity') !== null)) { activities = JSON.parse(localStorage.getItem('activities')) }
// var Saved = localStorage.getItem.parse('saved')
console.log(currentTime.format('MMM'))
var timeslot = []

for (var i = 0; i < 24; i++) {
    var hourBox = $('<div>').addClass('col-12 saveBox').attr('style', 'display:flex').attr('id', 'saveBox');
    var timeSpan = $('<span>').addClass('col-1');
    // var saveIcon = $('<i>').addClass('col-3 fas fa-save d-flex justify-content-center').attr('id', "save" + i + currentTime.format('MMMdoYY'));
    var saveIcon = $('<button>').addClass('button col-1 fas fa-save d-flex justify-content-center');
    timeSpan.text(i + ":00");
    var inputBox = $('<input>').addClass("col-8").attr('type', 'text').attr('id', "box" + i + currentTime.format('MMMdoYY'))
    schedule.append(hourBox.append(timeSpan).append(inputBox).append(saveIcon));
    // timeslot[i] = $(`#box${i}${currentTime.format('MMMdoYY')}`)
}
function test() { console.log('test') }
$('.saveBox').on('click', '.fa-save', test);


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

// for (var i = 0; i < 24; i++) {
//     saveIcons = $(`save${i}${currentTime.format('MMMdoYY')}`)
//     inputValue = $(`save${i}${currentTime.format('MMMdoYY')}`)

// }
// // // schedule.children().children().children().attr('value', 'test')
// // // hourBox.click(console.log('test'))
// // var test = document.querySelector('#Box0Jun4th22')
// // test.addEventListener('click', function () { console.log(this.parent().children().eq(1).value()) })