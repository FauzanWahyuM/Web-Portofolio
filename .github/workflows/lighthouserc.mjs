export default {
  ci: {
    collect: {
      numberOfRuns: 1,
      puppeteerScript: "./.github/workflows/lighthouse-puppeteer.mjs",
      settings: {
        chromeFlags: "--no-sandbox --headless --disable-gpu"
      }
    }
  }
}