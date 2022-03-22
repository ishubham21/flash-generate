/**
 * 
 * @Error_Codes - 1 => No valid template was received
 *              - 2 => No template name was received
 *              - 3 => Yarn is not installed
 *              - 4 => Error while building the template 
 */

/**
 * 
 * @param {Number} errCode 
 */
const printErrorMsg = (errCode, errDescription) => {
    switch (errCode) {

        //No valid template name was received
        case 1: {
            console.log('\x1b[31m%s\x1b[0m', `
                It seems like you have not really passed the correct template name that you want me to generate.`)
            console.log(`
                Here is a list of all the valid template names - 
                1. react-js => Generates a JavaScript-based React template.
                2. react-router-js => Generates a JavaScript-based React template with a pre-installed react-router.`)
        }
            break

        case 2: {
            console.log('\x1b[31m%s\x1b[0m', `
                No valid template parameter was received! Template is passed using --template flag`)
            console.log(`
                Here is a list of all the valid template names - 
                1. react-js => Generates a JavaScript-based React template.
                2. react-router-js => Generates a JavaScript-based React template with a pre-installed react-router.`)
            console.log('\x1b[33m%s\x1b[0m', `
                Usage Example => flash-generate my-app --template=react-js\n`)
        }
            break

        case 3: {
            console.log('\x1b[31m%s\x1b[0m', `
                Yarn was not found!`)
            console.log('\x1b[33m%s\x1b[0m', `
                npm install -g yarn\n`)
        }

        case 4: {
            console.log('\x1b[31m%s\x1b[0m', `
                Oops! Something crashed :( ${errDescription}
            `)
        }
    }
}

module.exports = printErrorMsg