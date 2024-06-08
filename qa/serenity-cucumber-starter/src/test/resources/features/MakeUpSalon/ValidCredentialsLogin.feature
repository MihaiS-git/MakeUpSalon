Feature: Login Feature for a make up salon
  As a user,
  I should be able to login into the make up salon if the username and password are correct

  Background:
    Given I am on the MakeUpSalon Page

  @validLogin
  Scenario: Login with valid credentials

    Given I click on login icon
    When I enter the email "cristin@makeup.com"
    And I enter the password "cristin1"
    And I click on the Login button
    Then I should see the "Login successful! Enjoy your stay!" message

