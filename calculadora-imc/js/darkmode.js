const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    colorPrimary: getStyle(html, "--color-primary"),
    bgColor: getStyle(html, "--bg-color"),
    colorSecundary: getStyle(html, "--color-secundary"),
}

const darkMode = {
    colorPrimary: "#110216",
    bgColor: "#2B1433",
    colorSecundary: "#fff"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})