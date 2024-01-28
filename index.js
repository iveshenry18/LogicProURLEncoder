#! /usr/bin/env node

import { program } from "commander";
import clipboardy from "clipboardy";

function encodeLogicProUrl(filepath) {
  const encodedPath = encodeURI(filepath);
  return `applelogicpro://${encodedPath}`;
}

// Run the above as a CLI tool
program
  .command("encode <filepath>")
  .description("Encode a Logic Pro file path to a URL")
  .action((filepath) => {
    const url = encodeLogicProUrl(filepath);
    console.log("Encoded URL.");
    console.log(`Result: ${url}`);
    // and paste the result to the clipboard
    clipboardy.writeSync(url);
    console.log("Copied to clipboard.");
    return url;
  });

program.parse(process.argv);
