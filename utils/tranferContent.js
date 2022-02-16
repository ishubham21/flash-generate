const fs = require('fs-extra')

/**
 * 
 * @returns a promise that - resolves on succesfully copying the files from source to destination
 */
const copyContentFromSource = (sourceFolder, destinationFolder) => {

    console.log(`Boosting up your project...`)

    return new Promise((resolve, reject) => {
        fs.copy(sourceFolder, destinationFolder)
            .then(() => {
                resolve()
            })
            .catch((error) => reject(error))

    })
}

module.exports = copyContentFromSource