const swPrecache = require('sw-precache');
const rootDir = './public/';
swPrecache.write(`${rootDir}service-worker.js`, {
  staticFileGlobs: [
    rootDir + '*',
  ],
  stripPrefix: rootDir
}, () => { process.exit(0); });