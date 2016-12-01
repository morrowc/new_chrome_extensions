// Saves options to chrome.storage.sync.
function save_options() {
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
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    replacementText: 'butt',
  }, function(items) {
    document.getElementById('rpl').value = items.rpl;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
