console.log("background")
 
chrome.tabs.onUpdated.addListener(function(tabId, info) {
    if (info.status == "complete") {
        chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function(tabs) {
            var url = tabs[0].url;
            console.log(url)
            if (url.match("http://127.0.0.1/AdminLTE/pages/forms/general.html") !=null ) {
            		document.write("wjinghua@gmail.com");
            }
        });
    }
});
