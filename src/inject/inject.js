$(function() {
var fontURL = {
  Meiryo: 'http://larrywu.com/static/fonts/Meiryo.ttf'
};

var fontFam = {
  Meiryo: 'Meiryo'
};


var setFont = function() {
  chrome.storage.sync.get('selectedFont', function(selectedFont) {
    var font = selectedFont.selectedFont; 
    if (font && font !== 'Default') {
      fURL = fontURL[font];
      fFam = fontFam[font];
      $("<style type='text/css'> div .thing-show .row .row-value {font-family: " + fFam  + "!important; src: url('" + fURL + "') !important;} </style>").appendTo("head");
      $("<style type='text/css'> div .question-row .qquestion {font-family: " + fFam  + "!important; src: url('" + fURL + "') !important;} </style>").appendTo("head");
      $("<style type='text/css'> span.val {font-family: " + fFam  + "!important; src: url('" + fURL + "') !important;} </style>").appendTo("head");
    }
  });
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
  setFont();
});

setFont();
});
