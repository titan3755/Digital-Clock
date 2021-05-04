const clock = document.getElementById('clock-reading')

setInterval(() => {
    let dates = new Date
    let seconds = dates.getSeconds().toString()
    let minutes = dates.getMinutes().toString()
    let hours = dates.getHours().toString()
    let updatedSecs, updatedMins, updatedHours
    if (seconds <= 9) {
        updatedSecs = '0' + seconds
        if (minutes <= 9) {
            updatedMins = '0' + minutes
            if (hours <= 9) {
                updatedHours = '0' + hours
                clock.textContent = updatedHours + ':' + updatedMins + ':' + updatedSecs
            }
            else {
                clock.textContent = hours + ':' + updatedMins + ':' + updatedSecs
            }
        }
        else {
            clock.textContent = hours + ':' + minutes + ':' + updatedSecs
        }
    }
    else {
        clock.textContent = hours + ':' + minutes + ':' + seconds
    }
}, 1000);