let canvasSize = 16;

const loadCanvas = (n) => {
    const canvas = document.getElementById("canvas") || document.createElement("div");

    for (let i = 0; i < n; i++) {
        let canvasRow = document.createElement("div");
        canvasRow.className = "canvasRow";
        canvas.appendChild(canvasRow);

        for (let j = 0; j < n; j++) {
            let canvasSpace = document.createElement("div");
            canvasSpace.className = "canvasSpace";
            canvasSpace.addEventListener("mouseover", () => {
                canvasSpace.style.backgroundColor = "black";
            })
            canvasRow.appendChild(canvasSpace);
        }
    }
};

window.onload = () => {
    loadCanvas(canvasSize);
}