const inquirer = require('inquirer');

async function getInput() {
    const input = await inquirer.prompt([
        {
            type: 'input',
            name: 'letter',
            message: 'Enter up to three characters:',
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter a color keyword or a hexadecimal number:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you prefer to use?',
            choices: ['Circle', 'Square', 'Triangle']
        },
    ]);

    return input;
}

module.exports = { getInput };