chrome.contextMenus.create({
    title: '段落翻译',
    type: 'normal',
    contexts: ['selection'],
    onclick: this.showTransModal
});

console.log(123, chrome);