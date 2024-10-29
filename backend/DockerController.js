// DockerController.js
const { exec } = require('child_process');

const DockerController = {
    startServer: (serverId) => {
        return new Promise((resolve, reject) => {
            exec(`docker run -d --name server-${serverId} -p 25565:25565 itzg/minecraft-server`, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(stdout);
                }
            });
        });
    },

    stopServer: (serverId) => {
        return new Promise((resolve, reject) => {
            exec(`docker stop server-${serverId} && docker rm server-${serverId}`, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(stdout);
                }
            });
        });
    }
};

module.exports = DockerController;
