let canvasSize = "16"; // canvas size defaults to 16x16
let penColor = "#000000"; // pen defaults to black
let canvasColor = "#ffffff" // canvas defaults to white
let displayGrid = false; // by default, do not display grid lines on canvas
let isDrawing = false;

const setCanvas = (size) => {
    setCanvasSize(size);

    let canvas = document.getElementById("canvas");

    while (canvas.lastChild) {
        canvas.removeChild(canvas.lastChild);
    }

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
    setGridDisplay(displayGrid);
};


const setPenColor = (color) => {
    penColor = color;
    const canvasSpaces = document.getElementsByClassName("canvasSpace");

    for (let i = 0; i < canvasSpaces.length; i++) {
        canvasSpaces[i].addEventListener("mousedown", () => {
            canvasSpaces[i].style.backgroundColor = penColor;
            isDrawing = true;
        })
        canvasSpaces[i].addEventListener("mouseup", () => {
            isDrawing = false;
        })
        canvasSpaces[i].addEventListener("mouseover", () => {
            if (isDrawing) {
                canvasSpaces[i].style.backgroundColor = penColor;
            }
        });
    };
};


const setCanvasColor = (color) => {
    canvasColor = color;
    document.getElementById("canvas").style.backgroundColor = color;
};


const setCanvasSize = (size) => {
    canvasSize = size;
    document.getElementById("sliderValue").innerHTML = `${canvasSize} x ${canvasSize}`;
    document.getElementById("canvasSlider").setAttribute("value", canvasSize);
};


const setGridDisplay = (value) => {
    displayGrid = value;

    const canvasSpaces = document.getElementsByClassName("canvasSpace");

    for (let i = 0; i < canvasSpaces.length; i++) {
        if (displayGrid === false) {
            canvasSpaces[i].style.border = "none";
        } else {
            canvasSpaces[i].style.border = ".5px solid black";
        }
    };
};


const getRandomColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
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
};

const registerGridDisplayEvents = () => {
    document.getElementById("gridCheckBox").addEventListener("change", (event) => {
        setGridDisplay(event.target.checked);
    })
}


const registerCanvasEvents = () => {
    document.getElementById("canvas").addEventListener("mousedown", () => {
        console.log("started drawing");
    })
}


document.addEventListener("DOMContentLoaded", () => {
    setCanvas(canvasSize);
    setPenColor(penColor);
    setCanvasColor(canvasColor);
    setGridDisplay(displayGrid);

    registerSliderEvents();
    registerCanvasColorEvents();
    registerPenColorEvents();
    registerGridDisplayEvents();
    registerCanvasEvents();
});