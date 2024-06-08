package starter.stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.annotations.Steps;
import starter.actions.AppointmentSteps;
import starter.actions.ChangePasswordSteps;

public class AppointmentStepsDefinitions {

    @Steps
    AppointmentSteps appointmentSteps;
    ChangePasswordSteps changePasswordSteps;

    @When("I choose professional Kardigan Kim treatments")
    public void i_choose_professional_kardigan_kim_treatments() {
        appointmentSteps.chooseProfessional();
    }

    @When("I select the treatment Prom Or Special Event Makeup")
    public void i_select_the_treatment() {
        appointmentSteps.selectTreatment();
    }

    @When("I select the date and time for my appointment")
    public void i_select_the_date_and_time_for_my_appointment() {
        appointmentSteps.selectDateTime();
    }

    @When("I click on the Book button")
    public void i_click_on_the_book_button() {
        appointmentSteps.clickBookButton();
    }


    @Then("I click on the Account icon")
    public void i_click_on_the_account_icon() {
        changePasswordSteps.iClickOnAccountIcon();
    }

    @Then("I click on the Appointments icon")
    public void i_click_on_the_appointments_icon() {
        appointmentSteps.clickAppointmentsIcon();
    }

    @Then("I should see the status of my appointment as {string}")
    public void i_should_see_the_status_of_my_appointment_as(String expectedStatus) {
        appointmentSteps.verifyAppointmentStatus(expectedStatus);
    }
}
