Feature: Shopping Cart Management  

  Background:
    Given the user is logged in

  Scenario: Add product to shopping cart
    When the user adds a product to the cart
    Then the cart icon should show 1 items

  Scenario: View products in shopping cart
    When the user adds a product to the cart
    And the user navigates to the shopping cart
    Then the selected product should be displayed in the shopping cart