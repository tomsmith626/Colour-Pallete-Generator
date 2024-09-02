// Select the generate button and palette container
const generateBtn = document.getElementById('generate-btn');
const palette = document.getElementById('palette');

// Function to generate random hex colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create the color boxes
function generatePalette() {
    palette.innerHTML = ''; // Clear the palette
    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color;
        colorBox.innerText = color;

        // Add click-to-copy functionality
        colorBox.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            alert(`Copied ${color} to clipboard`);
        });

        palette.appendChild(colorBox);
    }
}

// Add event listener to the button
generateBtn.addEventListener('click', generatePalette);
