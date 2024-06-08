Feature: Register Feature for a make up salon
  As a user,
  I should be able to register with success if I enter my data information

  Background:
    Given I am on the MakeUpSalon Page

    @register
    Scenario: Register with valid data
      Given I click on Register Icon
      When I enter the First Name "Bianca"
      And I enter the Last Name "Rus"
      And I enter the email "bianca@makeup.com"
      And I enter the password "bianca12"
      And I enter the Phone Number "1234567891"
      And I enter the Date Of Birth "10/10/1988"
      And I enter the Address "Bucuresti, Romania"
      And I click on the Register button
      Then I should see the "Registration successful!!!" message

