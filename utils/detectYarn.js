const { exec } = require('child_process')

/**
 * Check if yarn is installed or not
 */
const isYarnInstalled = () => {
    exec(`yarn --version`, (error, stdout, stderr) => {
        if(!stdout) return false
        return true
    })
}

module.exports = isYarnInstalled