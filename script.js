var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("curr-time").innerHTML = time;

function update_time() {
    today = new Date();
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("curr-time").innerHTML = time;
    document.getElementById("curr-time").style.color = "red";
    var new_bg_color = "#" + today.getHours() + today.getMinutes() + today.getSeconds();
    document.body.style.backgroundColor = new_bg_color;
    requestAnimationFrame(update_time)
}


requestAnimationFrame(update_time)

