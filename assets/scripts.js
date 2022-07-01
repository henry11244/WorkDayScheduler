var schedule = $('#schedule')
var sche = document.querySelector('#schedule')
var currentTime = moment()

// var Saved = localStorage.getItem.parse('saved')
console.log(currentTime.format('MMM'))

for (var i = 0; i < 24; i++) {
    var hourBox = $('<div>').addClass('col-12').attr('style', 'display:flex');
    var timeSpan = $('<span>').addClass('col-1');
    var saveIcon = $('<i>').addClass('col-3 fas fa-save d-flex justify-content-center');
    timeSpan.text(i + ":00");
    var inputBox = $('<input>').addClass("col-8").attr('type', 'text').attr('id', "Box" + i + currentTime.format('MMM do YY'))
    schedule.append(hourBox.append(timeSpan).append(inputBox).append(saveIcon));
}

schedule.children().children().children().attr('value', 'test')