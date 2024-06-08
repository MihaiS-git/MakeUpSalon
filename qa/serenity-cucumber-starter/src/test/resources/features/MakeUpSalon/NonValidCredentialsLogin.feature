Feature: Login Feature for a make up salon
 As a user,
 I should see the error message if the username and the password are incorrect

  Background:
    Given I am on the MakeUpSalon Page

  @nonValidLogin
  Scenario Outline: Login with non-valid credentials
    Given I click on login icon
    When I enter the email <email>
    And I enter the password <password>
    And I click on the Login button
    Then I should see the <message> message
    Examples:
      | email              | password   | message                              |
      | "Test@admin.com"   | "test1111" | "Login failed. Invalid credentials." |
      | "Test@customer.ro" | "Test1111" | "Login failed. Invalid credentials." |