Feature: Book an appointment successfully at a makeup salon
  As a user,
  I want to be able to book an appointment for a treatment with a professional

  Background:
    Given I am on the MakeUpSalon Page
    And I have successfully logged in
    And I click on the Professionals icon
    And I see a list of available professionals


  @invalidDateTime
  Scenario: Attempt to add an appointment with the same date and time
    When I choose professional Kim Kardigan treatments
    And I select the treatment Prom Or Special Event Makeup
    And I select the date and time "2024-11-11 12:00:00" for my appointment
    And I click on the Book button
    Then I should see the "Not able to create an appointment with the selected data." message