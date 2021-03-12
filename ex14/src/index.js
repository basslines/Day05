function main() {
  var myNoun = "dog";
  var myVerb = "ran";
  var myAdjective = "big";
  var myAdverb = "quickly";

  var wordBlanks =
    "My cute " +
    myNoun +
    " loves to " +
    myVerb +
    " and would like to be " +
    myAdjective +
    " but cannot grow that " +
    myAdverb +
    ".";

  return wordBlanks;
}

console.log(main());
module.exports = main;
