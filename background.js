chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  try {
    const url = new URL(details.url);

    if (url.hostname === "leetcode.com" && url.pathname === "/daily") {

      const res = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query {
              activeDailyCodingChallengeQuestion {
                link
              }
            }
          `
        })
      });

      const data = await res.json();
      const link = data.data.activeDailyCodingChallengeQuestion.link;

      if (link) {
        chrome.tabs.update(details.tabId, {
          url: "https://leetcode.com" + link
        });
      }
    }
  } catch (e) {
    console.error("Daily redirect failed:", e);
  }
});

