import { NAMESPACE } from "../config/url";

console.log("[from translate extension]", window);

// chrome.scripting
document.documentElement.style.filter = "grayScale(0.12)";

const coordinate = {
  x: 0,
  y: 0
}

const recordMousePosition = (e: MouseEvent) => {
  console.log(e);
  coordinate.x = e.pageX;
  coordinate.y = e.pageY;
}

window.addEventListener('mousedown', e => {
  recordMousePosition(e);
})

const receiveMsgFromBackground = (message: Message_Type, sender: chrome.runtime.MessageSender, sendResponse: () => void) => {
  if (message && message.namespace === NAMESPACE) {
    alert(message.data.trans_result[0].dst);
  }
  // @ts-ignore
  sendResponse('received');
}

// @ts-ignore
chrome.runtime.onMessage.addListener(receiveMsgFromBackground);
