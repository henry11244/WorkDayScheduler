var schedule = $('#schedule')

var currentTime = moment()
console.log(currentTime.format('MMM'))

for (var i = 0; i < 24; i++) {
    var hourBox = $('<div>').addClass('col-12');
    hourBox.text(i + ":00").addClass('col-3');
    var inputBox = $('<input>').addClass("col-9").attr('type', 'text')
    var span = $('<span>').addClass("col-sm-10")
    schedule.append(hourBox.append(span.append(inputBox)));
}