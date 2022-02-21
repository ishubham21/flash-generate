#!/usr/bin/env node

/**
 * 
 * List of error codes used in the application can be found in ../utils/getResponseMessage.js
 * 
 */

const path = require("path"),
    args = require('minimist')(process.argv.slice(2))

const copyContentFromSource = require('../utils/tranferContent'),
    createFolder = require('../utils/createFolder'),
    updateFileContent = require("../utils/updateFileContent"),
    installDependencies = require("../utils/installDependencies"),
    isYarnInstalled = require("../utils/detectYarn"),
    printErrorMsg = require("../utils/getErrorMessage")

//picking up the project name from terminal
let folderName = process.argv[2],
    destinationFolder = folderName,
    sourceFolder,
    templateFolder

//updating the source folder to set the template to be retrieved
const template = args['template']
if (template) {
    switch (template) {
        case 'react-js': templateFolder = 'react-js'
            break
        case 'react-router-js': templateFolder = 'react-router-js'
            break
        default: {
            printErrorMsg(1)
            process.exit(1)
        }
    }
}
else {
    printErrorMsg(2)
    process.exit(2)
}
sourceFolder = path.join(__dirname, `../templates/${templateFolder}`)

const generateTemplate = () => {
    console.log('\x1b[33m%s\x1b[0m', "Initializing project..");

    /**
    * Chaining the promises to facilitate async operation
    */
    createFolder(folderName)
        .then(() => copyContentFromSource(sourceFolder, destinationFolder))
        .then(() => updateFileContent(folderName))
        .then(() => installDependencies(folderName))
        .then(() => {
            console.log('\x1b[32m%s\x1b[0m', `All done!`)
            console.log('\nYour project is now ready')
            console.log('\nUse the below command to run the app')
            console.log('\x1b[36m%s\x1b[0m', `\n\ncd ${folderName}\nyarn start`)
        })
        .catch(error => {
            printErrorMsg(4, error)
        })

}

//entry point in the application
//check if Yarn is installed or not
isYarnInstalled ?
    generateTemplate() :
    printErrorMsg(3)
