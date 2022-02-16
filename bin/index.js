#!/usr/bin/env node

const path = require("path")
const args = require('minimist')(process.argv.slice(2))

const copyContentFromSource = require('../utils/tranferContent')
const createFolder = require('../utils/createFolder')
const updateFileContent = require("../utils/updateFileContent")
const installDependencies = require("../utils/installDependencies")
const isYarnInstalled = require("../utils/detectYarn")

let folderName = process.argv[2]  //picking up the project name from Command-Line
const sourceFolder = path.join(__dirname, "../lib/react-js")
const destinationFolder = folderName

const buildTemplate = () => {
    console.log("Initializing project..");

    /**
    * Chaining the promises to facilitate async operation
    */
    createFolder(folderName)
        .then(() => copyContentFromSource(sourceFolder, destinationFolder))
        .then(() => updateFileContent(folderName))
        .then(() => installDependencies(folderName))
        .then(() => {
            console.log(
                `All done!\n\nYour project is now ready\n\nUse the below command to run the app.\n\ncd ${folderName}\nyarn start`
            )
        })
        .catch(error => {
            console.log(`Everything was fine until it wasn't :( \n- ${error}`)
        })

}

//entry point in the application
//check if Yarn is installed or not
isYarnInstalled ?
    buildTemplate() :
    console.log(`Yarn is not installed, use the following command to install it - \n npm i -g yarn`)
