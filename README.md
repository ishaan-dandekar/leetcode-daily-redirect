# LeetCode Daily Redirect

A tiny Chrome extension that lets you open today’s LeetCode Daily Problem by visiting:

```
https://leetcode.com/daily
```

The extension listens for that URL, fetches the current daily challenge from LeetCode’s API, and redirects the page to the correct problem. No scraping. No external services. No hosting.

---
## Installation (Developer Mode required)

1. Download or clone this repository.  
2. Open Chrome and go to `chrome://extensions`.  
3. Enable **Developer Mode**.  
4. Click **Load unpacked**.  
5. Select this project folder and enable the loaded extension.  

Then open:

```
https://leetcode.com/daily
```

You will be redirected to today’s Daily Problem.

---
## How It Works

1. You navigate to `leetcode.com/daily`.  
2. The extension intercepts the navigation.  
3. It calls LeetCode’s GraphQL endpoint for the daily challenge.  
4. The tab is redirected to the actual problem page.

---
## Why This Exists

LeetCode does not provide a static link that always opens the Daily Challenge.  
This extension simply fills that gap without relying on third-party servers.

---
## Notes

- Works in browsers that support Manifest V3.  
- If LeetCode changes their API structure, the extension may need an update. (Unlikely)

---
