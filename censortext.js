/*jslint node:true indent:2*/

var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(inStr) {
  'use strict';
  var idx;
  for (idx in censoredWords) {
    if (censoredWords.hasOwnProperty(idx)) {
      inStr = inStr.replace(censoredWords[idx], "****");
    }
  }
  for (idx in customCensoredWords) {
    if (customCensoredWords.hasOwnProperty(idx)) {
      inStr = inStr.replace(customCensoredWords[idx], "****");
    }
  }
  return inStr;
}

function addCensoredWord(word) {
  'use strict';
  customCensoredWords.push(word);
}

function getCensoredWords() {
  'use strict';
  return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;