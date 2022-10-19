function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.find((item) => hash === item.hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args);
    cache.push({ hash, result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let timeout;
  let isThrottled = false;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.call(this, ...args);
    }, delay);

    if (!isThrottled) {
      func.call(this, ...args);
      isThrottled = true;
    }
  };
}

function debounceDecoratorNewNew(func, delay) {
  let isThrottled = false;
  let timeout;
  wrapper.count = 0;

  function wrapper(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    if (!isThrottled) {
      func.call(this, ...args);
      wrapper.count++;
      isThrottled = true;
    }

    timeout = setTimeout(() => {
      isThrottled = false;
      func.call(this, ...args);
      wrapper.count++;
    }, delay);
  }

  return wrapper;
}
