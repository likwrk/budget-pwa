const swPrecache = require('sw-precache');
const rootDir = './public/';
swPrecache.write(`${rootDir}service-worker.js`, {
  staticFileGlobs: [
    rootDir + '*.css',
    rootDir + '*.js',
    rootDir + '*.json',
    rootDir + '*.xml',
    rootDir + '*.ico',
  ],
  stripPrefix: rootDir
}, () => { process.exit(0); });