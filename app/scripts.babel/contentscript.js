'use strict';

$(function(){

  var format_issue_url = function(str){
    var issueinfo = str.split('#');
    return '[' + str + '](' + 'https://github.com/' + issueinfo[0] + '/issues/' + issueinfo[1] + ')';
  };

  $('textarea').on('blur', function(e){
    var text = $(e.target).val();

    var issueRegExp = '[a-zA-Z0-9\-_]+\/[a-zA-Z0-9\-_]+#[0-9]+';
    var re = new RegExp('(' + issueRegExp + ')', 'g');
    var sanitizeRe = new RegExp('\[' + issueRegExp + '\]', 'g');

    var sanitizedText = text.replace(sanitizeRe, '');console.debug(sanitizedText);
    var issues = [];
    var match = null;
    while (match = re.exec(sanitizedText)) {
      issues.push(match[0]);
    }

    for (var i = 0; i < issues.length; i++) {
      text = text.replace(issues[i], format_issue_url(issues[i]));
    }
    $(e.target).val(text);
  });
});
