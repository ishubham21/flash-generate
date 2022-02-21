const fs = require('fs-extra')

/**
 * 
 * @param {string} folderName 
 * @returns a promise that reads the package.json file, 
            converts it into string and replaces the name of the application
 */
const updateFileContent = (folderName) => {

    //scripts to be replaced in the package.json file
    const scripts = `"name": "${folderName}"`
    console.log('\x1b[33m%s\x1b[0m', `\nPersonalising the application for you...`)

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
                    '"name": "flash"',
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
                    '"name": "flash"',
                    scripts
                )
            fs.writeFile(manifestJSON, data, (errorInWriting) => reject(errorInWriting));
            resolve()
        });
    })
}

module.exports = updateFileContent