Feature: Approve an appointment at a makeup salon
  As a employee,
  I want to be able to approve an appointment for a customer's treatment

  Background:
    Given I am on the MakeUpSalon Page
    And I have successfully logged in like an employee
    And I click on the Account icon
    And I click on the Appointments icon

  @approveAppointment
  Scenario: Successfully approved an appointment
    When I see the status of appointment as "Pending"
    Then I change the status of appointment as "Approved"
    And I click on Update button
    And I should see the "Appointment updated successfully!" message