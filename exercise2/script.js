let point = ["", ".", "..", "..."]
let counter = 0
let elem = document.getElementById("changeText")
setInterval(change, 300)
function change() {
    elem.innerHTML = point[counter]
    counter++
    if(counter >= point.length) { 
        counter = 0
    }
}
