"use strict";

// Require Node.js Dependencies
const { join } = require("path");

// Require Third-party Dependencies
const avaTest = require("ava");
const is = require("@slimio/is");

// Require Internal Dependencies
const parser = require("../");

avaTest("Export must be an Asynchronous method", (assert) => {
    assert.true(is.asyncFunction(parser));
});

avaTest("Parse .testfile and check deep content", async(assert) => {
    const ret = await parser(join(__dirname, ".testfile"));
    assert.true(is.set(ret));
    assert.deepEqual([...ret].sort(), ["/hello", "mdr.js", "yo.js"].sort());
});
