import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false});
});

Before(async function() {

    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    
    this.context = context;
    this.page = page;
});

After(async function() {
    await this.context.close();
});

AfterAll(async () => {
  await browser.close();
});