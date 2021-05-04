const clock = document.getElementById('clock-reading')
const dateReading = document.getElementById('date-reading')


const timeFunction = () => {
    let dates = new Date
    let seconds = dates.getSeconds()
    let minutes = dates.getMinutes()
    let hours = dates.getHours()

    seconds = timeCheck(seconds)
    minutes = timeCheck(minutes)
    hours = timeCheck(hours)
    let time = hours + ':' + minutes + ':' + seconds
    clock.textContent = time
    setTimeout(() => {
        timeFunction()
    }, 500);
}
const timeCheck = (i) => {
    if (i < 10) {
        i = '0' + i
    }
    return i
}

const dateFunction = () => {
    let dates = new Date
    let date, month, year, uMonth
    date = dates.getDate()
    uMonth = dates.getMonth()
    year = dates.getFullYear()
    switch (uMonth) {
        case 0:
            month = 'January'
            break;
        case 1:
            month = 'February'
            break;
        case 2:
            month = 'March'
            break;
        case 3:
            month = 'April'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'June'
            break;
        case 6:
            month = 'July'
            break;
        case 7:
            month = 'August'
            break;
        case 8:
            month = 'September'
            break;
        case 9:
            month = 'October'
            break;
        case 10:
            month = 'Novenber'
            break;
        case 11:
            month = 'December'
            break;
        default:
            month = 'NaN'
            break;
    }
    dateReading.textContent = date + ' ' + month + ' ' + year
    console.log(year); 
}
timeFunction()
dateFunction()
