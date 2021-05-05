const {Given, When, Then, setDefaultTimeout} = require('cucumber');
const {Key, browser, ExpectedConditions} = require('protractor');

setDefaultTimeout(60000);

Given('I open coinmarketcap', () => {
    return browser.get('https://coinmarketcap.com/');
});

When('I input keyword into searching field', async () => {
    const searchingField = await $('.sc-17ks6iv-3');
    return searchingField.sendKeys(keyword + Key.ENTER);
});

When('I click on search button', async () => {
    const item = await $('.kyoBCp');
    return await item.click();
});

Then('I wait for few seconds', async () => {
    await browser.wait(ExpectedConditions.urlContains(keyword), 5000);
    const result = (await browser.getSession()).getId().toString();
    console.log(result);
    return browser.sleep(7000);
});