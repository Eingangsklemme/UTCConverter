// Calculating the  UTC-time
const time = new Date()

function timeUTC() {
    const hoursInt = time.getHours
    const minsInt = time.getMinutes

    if (hoursInt < 10) {
        const hours = '0' + hoursInt
    } else {
        const hours = '' + hoursInt
    }

    if (minsInt < 10) {
        const mins = '0' + minsInt
    } else {
        const mins = '' + minsInt
    }

    const utcTime = hours + mins
    return utcTime
}