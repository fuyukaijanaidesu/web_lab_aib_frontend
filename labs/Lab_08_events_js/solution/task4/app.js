const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
const colorArea = document.getElementById("square");
let Color;

// Function to update background color
function updateBackgroundColor() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;

    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
        alert("Values should be in the range of 0 to 255.");
        return;
    }

    Color = `rgb(${red}, ${green}, ${blue})`;
    colorArea.style.backgroundColor = Color;

    // Save the color to localStorage
    localStorage.setItem("savedColor", Color);
}

// Event listeners for input elements
redInput.addEventListener("input", updateBackgroundColor);
greenInput.addEventListener("input", updateBackgroundColor);
blueInput.addEventListener("input", updateBackgroundColor);

// Button click event to create blocks
const button = document.getElementById("buttonInput");
const block = document.getElementById("block");
let count = 0;
const max = 15;

button.addEventListener("click", () => {
    const newBlockId = count % max;
    const existingBlock = document.getElementById(newBlockId.toString());

    if (count >= max && existingBlock) {
        existingBlock.style.backgroundColor = Color;
        // Save the color to localStorage for later use
        localStorage.setItem("savedColor", Color);
    } else {
        const newBlock = document.createElement("div");
        newBlock.className = "newBlock";
        newBlock.id = newBlockId.toString();
        newBlock.style.padding = '5%';
        newBlock.style.backgroundColor = Color;
        block.appendChild(newBlock);
    }

    count++;
});

// Click event for color blocks
block.addEventListener("click", (event) => {
    const clickedBlock = event.target;

    // Check if the clicked element is a color block
    if (clickedBlock.className === "newBlock") {
        const savedColor = localStorage.getItem("savedColor");

        // Update the background color of the clicked block
        if (savedColor) {
            clickedBlock.style.backgroundColor = savedColor;
        }
    }
});

// Click event for the entire document to reset other background colors
document.addEventListener("click", (event) => {
    const clickedElement = event.target;

    // Check if the clicked element is not the color area, input elements, or color blocks
    if (
        clickedElement !== colorArea &&
        clickedElement !== redInput &&
        clickedElement !== greenInput &&
        clickedElement !== blueInput &&
        clickedElement.className !== "newBlock"
    ) {
        // Reset the background color to the saved color
        const savedColor = localStorage.getItem("savedColor");
        if (savedColor) {
            clickedElement.style.backgroundColor = savedColor;
        }
    }
});
