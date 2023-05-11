class Trans {
    // 选中的待翻译内容
    public selectedContent: string;

    constructor(props: any) {
        this.selectedContent = '';
        this.init();
    }

    getContent() {
        return this.selectedContent;
    }

    setContent(content: string) {
        this.selectedContent = content;
    }

    init() {
        this.createContextMenu();
    }

    createContextMenu() {
        chrome.contextMenus.create({
            title: '段落翻译',
            contexts: ['selection'],
            onclick: this.showTransModal
        });
    }

    showTransModal(...args: any[]) {
        console.log(args);
    }
}

export default Trans;