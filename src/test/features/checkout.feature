Feature: Checkout Process

  Background:
    Given the user is logged in
    And the user adds a product to the cart
    And the user navigates to the shopping cart

  Scenario: Successfully complete a purchase
    When the user proceeds to checkout
    And the user enters valid checkout information
    And the user continues to the overview page
    Then the selected product should be displayed in the overview
    When the user finishes the purchase
    Then a confirmation message should be displayed