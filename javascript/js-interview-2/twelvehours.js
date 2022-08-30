
// 1:02 PM
function convert12Hrs(time12Hrs) {

    const [time, modified] = time12Hrs.split(" ");
    let [hour, min] = time.split(":");

    if (hour == 12) {
        hour = "00"
    }
    if (modified == "PM") {
        hour = parseInt(hour) + 12
    }
    return `${hour}:${min} ${modified}`
}

console.log(convert12Hrs("05:02 PM"))