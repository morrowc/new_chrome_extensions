// Saves options to chrome.storage.sync.
function saveOptions() {
  var rpl = document.getElementById('rpl').value;
  chrome.storage.sync.set({
    replacementText: rpl
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function loadOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    replacementText: 'butt',
  }, function(items) {
    document.getElementById('rpl').value = items.rpl;
  });
}
// document.addEventListener('DOMContentLoaded', loadOption);
// document.getElementById('save').addEventListener('click', saveOptions);
