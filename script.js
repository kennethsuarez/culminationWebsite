// initial document
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("curr-time").innerHTML = time;

const zeroPad = (num, places) => String(num).padStart(places, '0')

function update_time() {
    // get new date and time
    today = new Date();
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // update tag with class
    document.getElementById("curr-time").innerHTML = time;
    document.getElementById("curr-time").style.color = "red";
    // update background color
    var new_bg_color = "#" + zeroPad(today.getHours(), 2) + zeroPad(today.getMinutes(), 2) + zeroPad(today.getSeconds(), 2);
    document.body.style.backgroundColor = new_bg_color;
    
    requestAnimationFrame(update_time)
}

requestAnimationFrame(update_time)

