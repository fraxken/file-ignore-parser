"use strict";

// Require Node.js Dependencies
const { readFile } = require("fs").promises;

/**
 * @async
 * @function parseIgnoreFile
 * @description Parse .npmignore or .gitignore file and return each lines as a Set
 * @param {!string} location file location
 * @returns {Promise<Set<string>>}
 *
 * @throws {TypeError} location must be a string
 */
async function parseIgnoreFile(location) {
    const str = await readFile(location, { encoding: "utf8" });
    const lines = str.split(/\r?\n/).filter((line) => line.trim() !== "" && line.charAt(0) !== "#");

    return new Set(lines);
}

module.exports = parseIgnoreFile;
