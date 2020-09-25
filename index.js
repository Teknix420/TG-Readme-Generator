var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Title:"
    },
    {
        type: "editor",
        name: "description",
        message: "Description:"
    },
    {
        type: "editor",
        name: "installation",
        message: "Installation Instructions:"
    },
    {
        type: "editor",
        name: "usage",
        message: "Provide Instructions and examples for use."
    },
    {
        type: "editor",
        name: "credits",
        message: "Provide names and links to Collaborators."
    },
    {
        type: "editor",
        name: "test",
        message: "Type in a test for your program and an example of how to run them."
    },
    {
        type: "editor",
        name: "questions",
        message: "Please provide any Frequently Asked Questions and Answers."
    },
    {
        type: "editor",
        name: "contributors",
        message: "Please add instructions for developers wanting to contribute."
    },
    {
        type: "list",
        name: "license",
        message: "Choose the license that best fits:",
        choices: [
            "GNU General Public License v2.0",
            "MIT License",
            "Apache License 2.0",
            "ISC License"
        ]
    }
]).then(function (data) {

    var fs = require("fs");

    if (data.license === "GNU General Public License v2.0") {

        fs.readFile("./assets/GNU.txt", "utf8", function (error, data) {

            if (error) {
                return console.log(error);
            };

            fs.writeFile("license.md", data, function (err) {

                if (err) {
                    return console.log(err);
                }

            });

        });

    } else if (data.license === "MIT License") {

        fs.readFile("./assets/MIT.txt", "utf8", function (error, data) {

            if (error) {
                return console.log(error);
            };

            fs.writeFile("license.md", data, function (err) {

                if (err) {
                    return console.log(err);
                }

            });

        });

    } else if (data.license === "Apache License 2.0") {

        fs.readFile("./assets/Apache.txt", "utf8", function (error, data) {

            if (error) {
                return console.log(error);
            };


            fs.writeFile("license.md", data, function (err) {

                if (err) {
                    return console.log(err);
                }

            });

        });

    } else if (data.license === "ISC License") {

        fs.readFile("./assets/ISC.txt", "utf8", function (error, data) {

            if (error) {
                return console.log(error);
            };

            fs.writeFile("license.md", data, function (err) {

                if (err) {
                    return console.log(err);
                }

            });

        });

    };

    if (data.title === undefined) {
        data.title = "No information was provided at the time of this README's creation.";
    } if (data.description === undefined) {
        data.description = "No information was provided at the time of this README's creation.";
    } if (data.installation === undefined) {
        data.installation = "No information was provided at the time of this README's creation.";
    } if (data.usage === undefined) {
        data.usage = "No information was provided at the time of this README's creation.";
    } if (data.credits === undefined) {
        data.credits = "No information was provided at the time of this README's creation.";
    } if (data.contributors === undefined) {
        data2.contributors = "No information was provided at the time of this README's creation.";
    } if (data.tests === undefined) {
        data.tests = "No information was provided at the time of this README's creation.";
    } if (data.questions === undefined) {
        data.questions = "No information was provided at the time of this README's creation.";
    };

    const readMe = `
# ${data.title}

## Description

![GitHub All Releases](https://img.shields.io/github/downloads/teknix420/TG-Readme-Generator/total?style=social)
${data.description}
            
## Table Of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
            
## Installation
            
${data.installation}
            
## Usage
            
${data.usage}
            
## Credits
            
${data.credits}
            
## Contributing
            
${data.contributors}
            
## Tests
            
${data.tests}
            
## FAQ
            
${data.questions}
            
## License
            
[Link to attached License](./license.md)
    `;

    fs.writeFile("sampleREADME.md", readMe, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("You've successfully generated your README file!");
        console.log("Please edit the generated license and README as needed.")

    });

});