const { exec } = require('child_process')

const isYarnInstalled = () => {
    exec(`yarn --version`, (error, stdout, stderr) => {
        if(!stdout) return false
        return true
    })
}

module.exports = isYarnInstalled