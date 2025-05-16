module.exports = async (browser) => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForNetworkIdle();
    return page;
};