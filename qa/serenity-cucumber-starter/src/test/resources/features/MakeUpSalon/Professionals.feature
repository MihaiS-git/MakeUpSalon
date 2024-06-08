Feature: Display the list of professionals for a make up salon
  As a user,
  I want to see a list of professionals available at the salon
  So that I can choose a suitable professional


  Background:
    Given I am on the MakeUpSalon Page
    And I have successfully logged in

@professionals
    Scenario: Professionals display
      When I click on the Professionals icon
      Then I see a list of available professionals
      And the list should include the name, mobile phone and treatments