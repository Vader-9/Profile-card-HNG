
function time(){
    document.getElementById("clock").innerHTML = Date.now()
}

setInterval(time, 1000);