// var app = chrome.runtime.getBackgroundPage();
function hello() {
  chrome.tabs.executeScript({
    file: 'asin.js'
  }); 
}
document.getElementById('getAsin').addEventListener('click', hello);


