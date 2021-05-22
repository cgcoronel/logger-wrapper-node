const path = require('path');

/**
 * Get relative path from a filename.
 * @returns {string}
 */
const getRelativePath = (filename)=>path.relative(process.cwd(), filename);

/**
 * Get function name from a stack trace.
 * @returns {string}
 */
const getCallerFile = () => {

    const oldPrepareStackTrace = Error.prepareStackTrace;
    
    Error.prepareStackTrace = (_, stack) => stack;
    const { stack } = new Error();
    Error.prepareStackTrace = oldPrepareStackTrace;
    
    if (!(stack !== null && typeof stack === 'object' && stack.length>=3)){
        return '';
    }

    const fileName = stack[3].getFileName();
    const fn = stack[3].getFunctionName();
    
    return `/${getRelativePath(fileName)} -> ${fn}()`;      

};

/**
 * Get package.json version from node process.
 * @returns {string}
 */
const getVersion = ()=> process.env.npm_package_version;

module.exports={
    getRelativePath,
    getCallerFile,
    getVersion
};