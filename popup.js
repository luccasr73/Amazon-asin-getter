// var app = chrome.runtime.getBackgroundPage();
function execute() {
  chrome.tabs.executeScript({
    file: 'asin.js'
  }); 
}
document.getElementById('getAsin').addEventListener('click', execute);


