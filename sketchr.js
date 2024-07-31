let canvasSize = "16"; // canvas size defaults to 16x16
let penColor = "#000000"; // pen defaults to black
let canvasColor = "#ffffff" // canvas defaults to white


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

    setPenColor(penColor);
    setCanvasColor(canvasColor);
};


const setPenColor = (color) => {
    penColor = color;
    const canvasSpaces = document.getElementsByClassName("canvasSpace");

    for (let i = 0; i < canvasSpaces.length; i++) {
        canvasSpaces[i].addEventListener("mouseover", () => {
            canvasSpaces[i].style.backgroundColor = penColor;
        });
    };
};


const setCanvasColor = (color) => {
    canvasColor = color;
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
    });
};


const registerCanvasColorEvents = () => {
    document.getElementById("canvasColorPicker").addEventListener("change", (event) => {
        setCanvasColor(event.target.value);
    })
};


const registerPenColorEvents = () => {
    document.getElementById("penColorPicker").addEventListener("change", (event) => {
        setPenColor(event.target.value);
    })
}


document.addEventListener("DOMContentLoaded", () => {
    setCanvasSize(canvasSize);
    setCanvas(canvasSize);
    registerSliderEvents();
    registerCanvasColorEvents();
    registerPenColorEvents();
})