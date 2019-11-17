export const fetchFromDb = (key: string): Promise<{ [key: string]: any }> => {
  return new Promise((res, rej) => {
    chrome.storage.sync.get([key], (result) => res(result));
  });
};
