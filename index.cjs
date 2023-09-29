const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://jonasclaes.be");
  await page.screenshot({ path: `screenshots/example.png` });
  await browser.close();
})();
