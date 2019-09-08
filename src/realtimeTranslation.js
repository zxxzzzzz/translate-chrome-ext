import Tooltip from 'tooltip.js';
import './tooltip.css';
import './manifest.config';
import './main.chromejs';

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
    arrowSelector:'.tooltip-arrow-zxx',
    innerSelector:'.tooltip-inner-zxx',
    trigger: 'click',
    template: '<div class="tooltip-zxx" role="tooltip"><div class="tooltip-arrow-zxx"></div><div class="tooltip-inner-zxx"></div></div>'
  });
  console.log(request.response.translation)
  tooltip.show();
});

