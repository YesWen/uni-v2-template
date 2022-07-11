let tools = {}
// 复制文本
tools.clipboardData = (text) => {
  // #ifdef  H5
  const input = document.createElement('input');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  input.addEventListener('copy', function(event) {
    let clipboardData = event.clipboardData || window.clipboardData;
    if (!clipboardData) {
      return;
    }
    let text = window.getSelection().toString();
    if (text) {
      event.preventDefault();
      clipboardData.setData('text/plain', text);
    }
  });
  // 执行复制操作
  if (document.execCommand('copy')) {
    return true
  } else {
    return false
  }
  // 移除input框
  document.body.removeChild(input);
  // #endif

  // #ifndef  H5
  uni.setClipboardData({
    data: text,
    success: function() {
      return true
    }
  });
  // #endif

}

export default tools
