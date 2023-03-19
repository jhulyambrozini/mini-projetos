const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bgColor: getStyle(html, "--bg-color"),
    bgPanel: getStyle(html, "--bg-panel"),
    textColor: getStyle(html, "--text-color"),
}

const darkMode = {
    bgColor: "#404040",
    bgPanel: "#BFBFBF",
    textColor: "#000"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

export default function changeMode() {
    checkbox.addEventListener("change", ({target}) => {
        target.checked ? changeColors(darkMode) : changeColors(initialColors)
    })
}