var regexp = require('markdown-it-regexp');

function parser(match, utils) {
  var id = match[1];
  var url = 'https://codesandbox.io/embed/' + id;

  return (
    '<iframe src="' +
    url +
    '" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>'
  );
}

module.exports = regexp(/@\[codesandbox\]\(([^\)]*)\)/, parser);
