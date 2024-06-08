Feature: Change password Feature for a make up salon account
  As a user,
  I should be able to change password with success if I am logged in and go to my account


  Background:
    Given I am on the MakeUpSalon Page
    And I have successfully logged in

    @validChangePassword
    Scenario: Change password successful
      When I click on Account icon
      And I click on Change Password icon
      And I enter new password "cristin1"
      And I enter confirm password "cristin1"
      And I click on Change Password button
      Then I should see the "Password changed successfully." message