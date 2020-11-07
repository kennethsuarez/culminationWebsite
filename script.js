const zeroPad = (num, places) => String(num).padStart(places, '0')

function update_time() {
    // get new date and time
    var today = new Date();
    var hour = zeroPad(today.getHours(), 2);
    var minute = zeroPad(today.getMinutes(), 2);
    var second = zeroPad(today.getSeconds(), 2);
    // update background color
    var new_bg_color = "#" + hour + minute + second;
    document.body.style.backgroundColor = new_bg_color;
    // update tag with class
    var display_time = zeroPad(hour, 2) + " " + minute  + " " + second
    document.getElementById("curr-time").innerHTML = "#" + display_time;
    
    requestAnimationFrame(update_time)
}

requestAnimationFrame(update_time)

