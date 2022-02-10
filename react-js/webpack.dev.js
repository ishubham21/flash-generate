// const { merge } = require('webpack-merge')
// const common = require('./webpack.common')

const port = 3000

var net = require('net');

/**
 * 
 * @param port - PORT to be checked
 * @param callback - callback function
 */
var portInUse = function (port, callback) {
    var server = net.createServer(function (socket) {
        socket.write('Echo server\r\n');
        socket.pipe(socket);
    });

    server.on('error', function (e) {
        callback(true);
    });
    
    server.on('listening', function (e) {
        server.close();
        callback(false);
    });

    server.listen(port, '127.0.0.1');
};

portInUse(3000, function (returnValue) {
    console.log(returnValue);
});

// module.exports = merge(common, {
//     mode: 'development',
//     devtool: 'inline-source-map',
//     devServer: {
//         port: 3002,
//         open: true,
//         compress: true,
//         client: {
//             reconnect: true,
//         },
//     },
// })
