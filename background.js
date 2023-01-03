chrome.contextMenus.onClicked.addListener(function(info, tab) {
    const url = {
        "maps": "http://www.google.com/maps/place/",
        "search": "http://www.google.com/?q=",
    }[info.menuItemId];
    chrome.tabs.create({  
        url: url + encodeURIComponent(info.selectionText)
    });
})

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": 'Maps',
        "contexts": ["selection"],
        "id": "maps"
    });
    chrome.contextMenus.create({
        "title": 'Search',
        "contexts": ["selection"],
        "id": "search"
    });
});
   