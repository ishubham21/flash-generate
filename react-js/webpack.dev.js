const { merge } = require('webpack-merge')
const common = require('./webpack.common')

let PORT = 3000;    //initial PORT value

//function to check if port is available and update if busy
/**
 * 
 * @param {*} port - port to run the server on
 */
const isPortAvailable = (port) => {
    //update PORT
    PORT = port;

    const server = net.createServer().listen(port, '127.0.0.1');

    //if port is available
    server.on('listening', function () {
        server.close();
    });

    //if port is busy, update the current port
    server.on('error', err => {
        if (err.code === 'EADDRINUSE') {
            isPortAvailable(port + 1);
        }
    });
}

isPortAvailable(PORT);

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true,
        client: {
            reconnect: true,
            overlay: true,
        },
    },
}

module.exports = merge(common, devConfig)
