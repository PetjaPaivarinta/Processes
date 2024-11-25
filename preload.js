const os = require('os');

window.addEventListener('DOMContentLoaded', () => {
    window.systemInfo = {
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        cpus: os.cpus(),
        totalmem: os.totalmem(),
        freemem: os.freemem()
    };
});