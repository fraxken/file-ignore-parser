// Require Node.js Dependencies
const { readFile } = require("fs").promises;

/**
 * @async
 * @generator
 * @func parseIgnoreFile
 * @param {!String} location file location
 * @returns {Promise<Set<String>>}
 *
 * @throws {TypeError}
 */
async function parseIgnoreFile(location) {
    if (typeof location !== "string") {
        throw new TypeError("location must be a string");
    }

    const str = await readFile(location, { encoding: "utf8" });
    const lines = str.split(/\r?\n/).filter((line) => line.trim() !== "" && line.charAt(0) !== "#");

    return new Set(lines);
}

module.exports = parseIgnoreFile;
