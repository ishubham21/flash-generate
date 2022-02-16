const fs = require('fs-extra')
const { exec } = require("child_process")

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
        exec(`mkdir ${folderName} && cd ${folderName}`,
            (error) => {
                if (error) reject(error)
                resolve()
            })
    })
}

module.exports = createFolder
