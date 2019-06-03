const key = 'a3ebe359-db8c-4e82-b340-99d5ff6c0995';
const historyKey = `history-${key}`;
const optionsKey = `options-${key}`;

export function getDefaultOptions() {
  return {
    budget: 0,
    end: Date.now(),
    start: Date.now(),
    active: false,
  };
}

export function updateOptions(options) {
  return new Promise(resolve => {
    localStorage.setItem(optionsKey, JSON.stringify(options));
    resolve(options);
  });
}

export function getOptions() {
  return new Promise(resolve => {
    let options;
    try {
      options = JSON.parse(localStorage.getItem(optionsKey)) || getDefaultOptions();
    } catch (e) {
      options = getDefaultOptions();
    }
    console.log('getOptions options', options);
    resolve(options);
  });
}

export function getHistoryItems() {
  return new Promise(resolve => {
    let history;
    try {
      history = JSON.parse(localStorage.getItem(historyKey)) || [];
    } catch (e) {
      history = [];
    }
    resolve(history);
  });
}

export function clearHistory() {
  return new Promise(resolve => {
    localStorage.setItem(historyKey, JSON.stringify([]));
    resolve([]);
  });
}

export function addHistoryItem(item) {
  return getHistoryItems().then(history => {
    history.push(item);
    localStorage.setItem(historyKey, JSON.stringify(history));
    return history;
  });
}

export function removeHistoryItem(timestamp) {
  return getHistoryItems().then(history => {
    const newHistory = history.filter(e => e.timestamp !== timestamp);
    localStorage.setItem(historyKey, JSON.stringify(newHistory));
    return newHistory;
  });
}
