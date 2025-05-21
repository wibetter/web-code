export function LoaderScript(scriptSrc, resolve) {
  if (!scriptSrc) {
    return;
  }
  // 避免创建重复的Script
  const existingScriptTags = document.getElementsByTagName('script');
  for (let i = 0; i < existingScriptTags.length; i++) {
    const tag = existingScriptTags[i];
    if (scriptSrc === tag.getAttribute('src')) {
      const isLoaded = tag.getAttribute('isLoaded');
      if (isLoaded === 'ok') {
        // 当前已加载完成
        resolve();
      } else {
        // 当前还未加载完成
        tag.addEventListener('load', () => {
          // 确保当前资源加载完成后再触发回调函数
          resolve();
        });
      }
      return;
    }
  }

  const script = document.createElement('script');
  script.charset = 'utf-8';
  script.timeout = 120;
  script.setAttribute('defer', 'defer');
  script.src = scriptSrc;

  const onScriptComplete = (event) => {
    // avoid mem leaks in IE.
    script.onerror = null;
    clearTimeout(timeout);
    // 加载完成后增加标记
    script.setAttribute('isLoaded', 'ok');
    resolve(); // 执行回调方法
  };
  const timeout = setTimeout(() => {
    onScriptComplete({ type: 'timeout', target: script });
  }, 120000); // 设定超时
  script.onerror = onScriptComplete;
  script.addEventListener('load', onScriptComplete);
  document.head.appendChild(script);
}