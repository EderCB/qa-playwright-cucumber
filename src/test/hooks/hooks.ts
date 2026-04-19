import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import fs from 'fs';

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({
        //headless: false,
        //slowMo: 800
    });

     if (fs.existsSync('reports')) {
        fs.rmSync('reports', { recursive: true, force: true });
    }

    fs.mkdirSync('reports/screenshots', { recursive: true });
});

Before(async function () {

    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    this.context = context;
    this.page = page;
});

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {

        const screenshot = await this.page.screenshot({
            fullPage: true
        });

        const safeName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_');
        
        fs.writeFileSync(
            `reports/screenshots/${safeName}.png`,
            screenshot
        );

        this.attach(screenshot, 'image/png');
    }

    await this.page.close();
    await this.context.close();
});

AfterAll(async () => {
    await browser.close();
});