import accounts from "../config/accounts";
import { NAMESPACE } from "../config/url";
import sign from "../core/sign";


chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "ddadad",
    title: "段落翻译",
    type: "normal",
    contexts: ["selection"],
  });
});

const sendMessageToFront = async (data: Record<string, any>) => {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  const response = await chrome.tabs.sendMessage(tab.id as number, {namespace: NAMESPACE, data});
  // do something with response here, not outside the function
  console.log(response);
} 

const translate = async (info: any, tab: any) => {
  console.log(info, tab);
  const salt = Date.now();
  const signContent = sign(info.selectionText, salt);
  const res = await fetch(`https://fanyi-api.baidu.com/api/trans/vip/translate?q=${info.selectionText}&from=en&to=zh&appid=${accounts.appId}&salt=${salt}&sign=${signContent}`)
  if (res.status === 200 && res.ok) {
    const json = await res.json();
    sendMessageToFront(json); 
  }
};
chrome.contextMenus.onClicked.addListener(translate);
