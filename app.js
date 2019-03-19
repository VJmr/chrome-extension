document.addEventListener('DOMContentLoaded', function() {
  var filterButton = document.getElementById('filterBtn');
  filterButton.addEventListener('click', function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      var url = tabs[0].url;
      alert(url);
    });
  }, false);
}, false);