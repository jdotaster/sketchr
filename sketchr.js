let canvasSize = "16"; // canvas size defaults to 16x16
let penColor = "#000000"; // pen defaults to black
let canvasColor = "#FFFFFF" // canvas defaults to white


const setCanvas = (size) => {
    let canvas = document.getElementById("canvas");

    if (canvas !== null) {
        let canvasContainer = document.getElementById("canvasContainer").removeChild(canvas);
    }

    canvas = document.createElement("div");
    canvas.id = "canvas";
    canvasContainer.appendChild(canvas);

    for (let i = 0; i < size; i++) {
        let canvasRow = document.createElement("div");
        canvasRow.className = "canvasRow";
        canvas.appendChild(canvasRow);

        for (let j = 0; j < size; j++) {
            let canvasSpace = document.createElement("div");
            canvasSpace.className = "canvasSpace";
            canvasRow.appendChild(canvasSpace);
        }
    }
};


const setPenColor = (color) => {
    const canvasSpaces = document.getElementsByClassName("canvasSpace");

    for (let i = 0; i < canvasSpaces.length; i++) {
        canvasSpaces[i].addEventListener("mouseover", () => {
            canvasSpaces[i].style.backgroundColor = color;
        });
    };
};


const setCanvasBgColor = (color) => {
    document.getElementById("canvas").style.backgroundColor = color;
}


const setCanvasSize = (size) => {
    canvasSize = size;
    document.getElementById("sliderValue").innerHTML = `${canvasSize} x ${canvasSize}`;
    document.getElementById("canvasSlider").setAttribute("value", canvasSize);
};


const registerSliderEvents = () => {
    document.getElementById("canvasSlider").addEventListener("input", (event) => {
        setCanvasSize(event.target.value);
    });
    document.getElementById("canvasSlider").addEventListener("change", () => {
        setCanvas(canvasSize);
        setPenColor(penColor);
    });
};


document.addEventListener("DOMContentLoaded", () => {
    setCanvasSize(canvasSize);
    setCanvas(canvasSize);
    setCanvasBgColor(canvasColor);
    setPenColor(penColor);
    registerSliderEvents();
})