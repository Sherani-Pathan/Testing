console.log('Background script loaded....');

chrome.runtime.onInstalled.addListener(() => {
    console.log('Salesforce Access Token Extension Installed');
});
