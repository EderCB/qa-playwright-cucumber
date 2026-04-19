Feature: User Authentication

  Background:
    Given the user is on the login page

  Scenario: Successful login
    When the user logs in with valid credentials
    Then the user should be redirected to the products page

   Scenario: Locked out user cannot log in
    When the user attempts to log in with a locked out user
    Then an error message should be displayed