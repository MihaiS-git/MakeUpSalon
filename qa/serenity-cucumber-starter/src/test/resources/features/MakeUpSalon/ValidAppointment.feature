Feature: Book an appointment successfully at a makeup salon
  As a user,
  I want to be able to book an appointment for a treatment with a professional

  Background:
    Given I am on the MakeUpSalon Page
    And I have successfully logged in
    And I click on the Professionals icon
    And I see a list of available professionals

  @validAppointment
    Scenario: Successfully add an appointment

      When I choose professional Kardigan Kim treatments
      And I select the treatment Prom Or Special Event Makeup
      And I select the date and time for my appointment
      And I click on the Book button
      Then I should see the "Appointment created successfully." message
      And I click on the Account icon
      And I click on the Appointments icon
      Then I should see the status of my appointment as "PENDING"

