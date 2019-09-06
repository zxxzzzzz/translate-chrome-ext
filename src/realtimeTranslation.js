import Tooltip from 'tooltip.js';
import './tooltip.css';

let sel = getSelection();
let tooltip = null;

document.addEventListener('mouseup', () => {
  const text = sel.toString();
  if(text !== ''){
    chrome.runtime.sendMessage({text: `${sel.toString()}`}, function(response) {
    });
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
  if(tooltip){
    tooltip.dispose();
  }
  tooltip = new Tooltip(sel.focusNode.parentElement,{
    placement:'right',
    title:request.response.translation,
  });
  tooltip.show();
});

