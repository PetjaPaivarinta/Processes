const os = require('os');
const path = require('path');

function updateSystemInfo() {
    const homedir = os.homedir();
    const systemDrive = path.parse(homedir).root;

    window.systemInfo = {
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        machine: os.machine(),
        cpus: os.cpus(),
        totalmem: os.totalmem(),
        freemem: os.freemem(),
        type: os.type(),
        userInfo: os.userInfo(),
        homedir: homedir,
        hostname: os.hostname(),
        networkInterfaces: os.networkInterfaces(),
        tempdir: os.tmpdir(),
        uptime: os.uptime(),
        version: os.version(),
        loadavg: os.loadavg(),
        endianness: os.endianness(),
        constants: os.constants,
        systemDrive: systemDrive
    };
}

window.addEventListener('DOMContentLoaded', () => {
    updateSystemInfo();
    setInterval(updateSystemInfo, 1000); // Update every second
});