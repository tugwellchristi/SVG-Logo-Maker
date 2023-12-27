const fs = require('fs').promises;

async function generateSVG(shape) {
    const svgFile = `<svg width="300" height="200">${shape.render()}</svg>`;
    await fs.writeFile('logo.svg', svgFile);
    console.log('Generated logo.svg');
}

module.exports = { generateSVG };