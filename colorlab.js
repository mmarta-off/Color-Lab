document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('mixingCanvas');
    const ctx = canvas.getContext('2d');
    let currentColor = '#FFFFFF';

    canvas.addEventListener('mousemove', function(e) {
        if (e.buttons === 1) { // Check if the mouse button is being pressed
            draw(e.offsetX, e.offsetY);
        }
    });

    function selectColor(color) {
        currentColor = color;
    }

    function draw(x, y) {
        ctx.fillStyle = currentColor;
        ctx.globalAlpha = 0.1; // Lower opacity to simulate mixing
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI); // Draw a circle at the cursor position
        ctx.fill();
    }

    function saveArtwork() {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'my_color_mix.png';
        link.href = dataURL;
        link.click();
    }

    window.selectColor = selectColor; // Expose function to global window object for HTML button access
    window.saveArtwork = saveArtwork;
});
