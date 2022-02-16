const { exec } = require('child_process')

/**
 * 
 * @returns a promise that - cd into the folder
 *                         - initialises an empty git repository
 *                         - installs all the dependencies using yarn
 *                         - rejects on an error
 */
const installDependencies = (folderName) => {
    console.log(`Installing react and other dependencies...`)

    return new Promise((resolve, reject) => {
        exec(`cd ${folderName} && git init && yarn install --frozen-lockfile`,
            (error) => {
                if (error) reject(error)
                resolve()
            })
    })
}

module.exports = installDependencies