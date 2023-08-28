const colorList = [
    '#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
    '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0'
  ];

document.querySelector("#button").onclick = function() {
    const color = colorList[Math.floor(Math.random() * colorList.length)]
    const text = document.querySelector("#currentColor")
    const object = document.querySelector("body")
    object.style.background = color
    text.innerHTML = "Current color is: " + color
}