#!/usr/bin/env node

"use strict";

/***
 * Description:
 *   Run ESLint against the staged version of files. Exit sucessfully
 * only if no errors or warnings where found.
 *
 * Steps:
 *
 *  1. List the sources files that are to be committed.
 *  2. Use git show :<path> to get print the staged file to stdout.
 *  3. Run ESLint on the staged version using executeOnText
 *  4. Print any errors or warning to standard output.
 *
 ***/

const { promisify } = require("util");
let { exec } = require("child_process");
exec = promisify(exec);
const ESLintCLIEngine = require("eslint").CLIEngine;
const cli = new ESLintCLIEngine({});
const formatter = cli.getFormatter();
const {
  getStagedFiles,
  onlyJSFiles,
  splitFileNames,
  reduceWithAnd,
  exit,
} = require("../lib/bin-utils.js");

function lintFile(filepath) {
  return exec(`git show :${filepath}`).then(ret => {
    const report = cli.executeOnText(ret.stdout, filepath);
    if (report.errorCount > 0 || report.warningCount > 0) {
      const errorResults = ESLintCLIEngine.getErrorResults(report.results);
      console.log(formatter(errorResults));
    }
    return report.errorCount === 0 && report.warningCount === 0;
  });
}

function lintFiles(filepaths) {
  return Promise.all(filepaths.map(lintFile));
}

exec(getStagedFiles)
  .then(splitFileNames)
  .then(onlyJSFiles)
  .then(lintFiles)
  .then(reduceWithAnd)
  .then(exit);