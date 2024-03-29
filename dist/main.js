function doTranslate(info, tab) {
  return new Promise((resolve, reject) => {
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'https://zinrai-translation.bicc.css.fujitsu.com/v1/translations?profile=default\&langFrom=ja\&langTo=zh', true);
    // xhr.setRequestHeader('Accept', 'application/json');
    // xhr.setRequestHeader('Content-type', 'application/json');
    // xhr.send(JSON.stringify({'source': info}));
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //     if(xhr.responseText !== ''){
    //       // result = JSON.parse(xhr.responseText);
    //       // alert(result.response.translation);
    //       resolve(JSON.parse(xhr.responseText));
    //     }
    //   }
    // };
    resolve({response:{translation:'111wwwwwwwwwwwwwwwwww11'}})
  });
}

// 发消息到前台
function sendMessageToContentScript(message, callback)
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
  {
    chrome.tabs.sendMessage(tabs[0].id, message, function(response)
    {
      if(callback) callback(response);
    });
  });
}
// 接受前台数据
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  doTranslate(request.text).then((data) => {
    sendMessageToContentScript(data);
  });
  sendResponse(true);
});

chrome.contextMenus.create({
  'title': 'Translate by ZINRAI',
  'contexts': ['selection'],
  'onclick': doTranslate
});