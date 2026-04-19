import { When, Then } from '@cucumber/cucumber';
import { CheckoutPage } from '../pages/CheckoutPage';
import { checkoutData } from '../utils/testData';

let checkoutPage: CheckoutPage;

When('the user proceeds to checkout', async function () {
    checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.clickCheckout();
});

When('the user enters valid checkout information', async function () {
    await checkoutPage.fillCheckoutInformation(
        checkoutData.validUser.firstName,
        checkoutData.validUser.lastName,
        checkoutData.validUser.postalCode
    );
});

When('the user continues to the overview page', async function () {
    await checkoutPage.continueCheckout();
});

Then('the selected product should be displayed in the overview', async function () {
    await checkoutPage.validateOverview(this.selectedProduct);
});

When('the user finishes the purchase', async function () {
    await checkoutPage.finishPurchase();
});

Then('a confirmation message should be displayed', async function () {
    await checkoutPage.validateConfirmation();
});