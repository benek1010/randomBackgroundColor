document.querySelector("#button").onclick = function() {
    const arr = "ABCDEF1234567890".split("")
    function myFunction() {
        let text = "#"
        for(i=0; i<6; i++) {
            text += arr[Math.floor(Math.random()*arr.length)]
        }
        return text
    }
    const color = myFunction()
    const text = document.querySelector("#currentColor")
    const object = document.querySelector("body")
    object.style.background = color
    text.innerHTML = "Current color is: " + color
}
