$(function() {
var getFont = function() {
  var e = document.getElementById("state");
  return e.options[e.selectedIndex].text;
}

var saveFont = function(font) {
  chrome.storage.sync.set({'selectedFont': font}, function(err) {});
}

$('#fontButton').click(function(event) {
  event.preventDefault();
  var font = getFont();
  console.log(font);
  saveFont(font);
  var status = $('#status');
  status.text('Saved Font');
  setTimeout(function() {
    status.html('<br>');
  }, 1000);
});

chrome.storage.sync.get('selectedFont', function(selectedFont) {
  var font = selectedFont.selectedFont; 
  if (font) {
    var e = document.getElementById("state");
    for (var i = 0; i < e.options.length; i++) {
      if (e.options[i].text === font) {
        e.selectedIndex = i;
        break;
      }
    }
  }
});
});
