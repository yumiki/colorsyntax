function entryPoint(args) {
  const highlight = require('highlightjs');
  var output = highlight.highlight(args.language,args.code);
  var outputJSON = { value: output.value, language: output.language };
  return {
     body: outputJSON 
  }
}

module.exports.main = entryPoint;

