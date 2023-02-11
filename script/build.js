/*
This script is using the node-sass package to compile the global.scss file into a global.css file.
https://www.npmjs.com/package/node-sass
*/

const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const nodeSassGlobbing = require('node-sass-globbing');


const compile = () => {
    const result = sass.renderSync({
        file: path.resolve('./global.scss'),
        outFile: path.resolve('src/lib/global.css'),
        outputStyle: 'compressed',
        includePaths: [path.resolve(__dirname, 'global.scss'), path.resolve("foundation")],
        sourceMap: true
    })
    return fs.writeFileSync(path.resolve('src/lib/global.css'), result.css.toString())
}



compile(); 