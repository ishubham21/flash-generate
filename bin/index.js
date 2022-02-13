#!/usr/bin/env node

const fs = require("fs-extra")
const path = require("path")
const { exec } = require("child_process")

const args = require('minimist')(process.argv.slice(2))

let folderName = process.argv[2]  //picking up the project name from Command-Line
const sourceFolder = path.join(__dirname, "../lib/react-js")
const destinationFolder = folderName

/**
 * 
 * @returns a promise that - cd into the folder
 *                         - initialises an empty git repository
 *                         - installs all the dependencies using yarn
 *                         - rejects on an error
 */
const installDependencies = () => {

    console.log(`Installing react and other dependencies...`)

    return new Promise((resolve, reject) => {
        exec(`cd ${folderName} && git init && yarn install`,
            (error, stdout, stderr) => {
                if (error) reject(error)
                resolve()
            })
    })
}

/**
 * 
 * @param {*} folderName 
 * @returns a promise that reads the package.json file, 
            converts it into string and replaces the name of the application
 */
const updatePackageDotJson = (folderName) => {

    //scripts to be replaced in the package.json file
    const scripts = `"name": "${folderName}"`
    console.log(`Personalising the application your you...`)

    return new Promise((resolve, reject) => {
        const packageJSON = `${folderName}/package.json`;
        const manifestJSON = `${folderName}/public/manifest.json`

        // replace the default name of the application with the folder name
        //updating the name in package.json
        fs.readFile(packageJSON, (error, file) => {
            if (error) reject(error);
            const data = file
                .toString()
                .replace(
                    '"name": "react-js"',
                    scripts
                )
            fs.writeFile(packageJSON, data, (errorInWriting) => reject(errorInWriting));
        });

        //updating the manifest file
        //resolve on successful updatation
        fs.readFile(manifestJSON, (error, file) => {
            if (error) reject(error);
            const data = file
                .toString()
                .replace(
                    '"name": "react-js"',
                    scripts
                )
            fs.writeFile(manifestJSON, data, (errorInWriting) => reject(errorInWriting));
            resolve()
        });
    })
}

/**
 * 
 * @returns a promise that - resolves on succesfully copying the files from source to destination
 */
const copyContentFromSource = () => {
    
    console.log(`Boosting up your project...`)

    return new Promise((resolve, reject) => {
        fs.copy(sourceFolder, destinationFolder)
            .then(() => {
                resolve()
            })
            .catch((error) => reject(error))

    })
}

/**
 * 
 * @param {*} folderName 
 * @returns a promise that - rejects if a folder with same name exits
 *                         - rejects if folderName is undefined
 *                         - make a directory with the name: folderName and cd into it
 */
const createFolder = (folderName) => {
    return new Promise((resolve, reject) => {

        //reject if the foldername is undefined
        if (!folderName) return reject(`No project name was passed`)

        //reject if a folder with the same name exists
        if (fs.existsSync(folderName)) return reject(`A project with the similar name exits!`)

        console.log(`Creating a folder for your awesome project...`)

        //make directory, change directory, and init a package.json file
        exec(`mkdir ${process.argv[2]} && cd ${process.argv[2]}`,
            (error, stdout, stderr) => {
                if (error) reject(error)
                resolve()
            })
    })
}

//entry point in the application
console.log("Initializing project..");

/**
 * Chaining the promises to facilitate async operation
 */
createFolder(folderName)
    .then(() => copyContentFromSource(folderName))
    .then(() => updatePackageDotJson(folderName))
    .then(() => installDependencies(folderName))
    .then((res) => {
        console.log(
            `All done!\n\nYour project is now ready\n\nUse the below command to run the app.\n\ncd ${folderName}\nyarn start`
        )
    })
    .catch(error => {
        console.log(`Everything was fine until it wasn't :( \n- ${error}`)
    })