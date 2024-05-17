const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function generateLogo() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters.',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
      },
    ]);
    
    let shape;
    if (answers.shape === 'circle') {
        shape = new Circle();
    } else if (answers.shape === 'triangle') {
        shape = new Triangle();
    } else if (answers.shape === 'square') {
        shape = new Square();
    }

    fs.writeFileSync('logo.svg');
    console.log('Generated logo.svg');
}

generateLogo();