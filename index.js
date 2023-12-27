const { getInput } = require('./lib/input');
const shapes = require('./lib/shapes');
const { generateSVG } = require('./lib/generator');

async function create()  {
    const input = await getInput();

    const selectedShape = new shapes[input.shape]();
    selectedShape.setColor(input.logoColor);
    selectedShape.setText(input.letter);
    selectedShape.setTextColor(input.textColor);

    await generateSVG(selectedShape);
}

create();

