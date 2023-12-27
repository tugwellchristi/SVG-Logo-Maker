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
            name: 'textColor',
            message: 'Enter a color keyword or a hexadecimal number for logo text:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you prefer to use?',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'logoColor',
            message: 'Enter a color keyword or a hexadecimal number for logo shape:',
        },
    ]);

    return input;
}

module.exports = { getInput };