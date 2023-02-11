/*
This script is using the node-sass package to compile the global.scss file into a global.css file.
https://www.npmjs.com/package/node-sass
*/

const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const nodeSassGlobbing = require('node-sass-globbing');



const compile = (src, dist) => {
    const result = sass.renderSync({
        file: src, // path to the scss file
        outFile: dist,  // path to the css file
        outputStyle: 'compressed', // compressed, expanded, nested, compact
        includePaths: [path.resolve('src')],  // This is needed to resolve the @import statements in the scss files
        sourceMap: true, // This is needed to generate the source map file
    })
    return fs.writeFileSync(path.resolve('src/lib/global.css'), result.css.toString())
}

const compileSass = () => {
    const source = path.resolve('src/global.scss');
    const destination = path.resolve('src/lib/global.css');
    compile(source, destination);
}

compileSass();
