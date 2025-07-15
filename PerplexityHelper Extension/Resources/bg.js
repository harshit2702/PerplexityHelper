//
//  bg.js
//  PerplexityHelper
//
//  Created by Harshit Agarwal on 14/07/25.
//
let savedTabId = null;

async function getQuery(tabId) {
  const [res] = await browser.scripting.executeScript({
    target: { tabId },
    files: ["selection.js"]
  });
  return res.result || "";
}

async function openPerplexity(tab, queryText) {
  const base = "https://www.perplexity.ai/search?q=";
  const queryWithTag = (queryText || tab.title);
  const url  = base + encodeURIComponent(queryWithTag);

  let [existingTab] = await browser.tabs.query({ url: "https://www.perplexity.ai/*" });
    if (existingTab) {
      await browser.tabs.update(existingTab.id, { url, active: true });
      savedTabId = existingTab.id;
      return;
    }
  const newTab = await browser.tabs.create({
    url,
    index: tab.index + 1
  });
  savedTabId = newTab.id;
}

async function handle(tab) {
  const query = await getQuery(tab.id);
  openPerplexity(tab, query);
}

browser.action.onClicked.addListener(handle);
browser.commands.onCommand.addListener(() => {
  browser.tabs.query({ active: true, currentWindow: true })
              .then(([tab]) => handle(tab));
});

