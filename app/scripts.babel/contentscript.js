'use strict';

$(function(){

  var format_issue_url = function(str){
    var issueinfo = str.split('#');
    return '[' + str + '](' + 'https://github.com/' + issueinfo[0] + '/issues/' + issueinfo[1] + ')';
  };

  $('textarea').on('blur', function(e){
    var text = $(e.target).val();

    var re = /([\w]+\/[\w]+#[0-9]+)/g;
    var issues = [];
    var match = null;
    while (match = re.exec(text)) {
      issues.push(match[0]);
    }

    for (var i = 0; i < issues.length; i++) {
      text = text.replace(issues[i], format_issue_url(issues[i]));
    }
    $(e.target).val(text);
  });
});
