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