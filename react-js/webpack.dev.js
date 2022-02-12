const { merge } = require('webpack-merge')
const common = require('./webpack.common')

let PORT = 3000;    //initial PORT value
const net = require('net')
//function to check if port is available and update if busy
/**
 * 
 * @param {*} port - port to run the server on
 */
const isPortAvailable = (port) => {
    //update PORT
    PORT = port

    const server = net.createServer().listen(port, '127.0.0.1');

    //if port is available
    server.on('listening', function () {
        server.close()
    })

    //if port is busy, update the current port
    server.on('error', err => {
        //update the PORT recursively
        if (err.code === 'EADDRINUSE') {
            isPortAvailable(port + 1)
        }
    })
}

isPortAvailable(PORT)

//custom PORT config
const portConfig = {
    devServer: {
        port: 3000
    }
}

//webpack-dev-server config
const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        open: true,
        compress: true,
        historyApiFallback: true,
        client: {
            reconnect: true,
            overlay: true,
        },
    },
}

module.exports = merge(common, devConfig, portConfig)