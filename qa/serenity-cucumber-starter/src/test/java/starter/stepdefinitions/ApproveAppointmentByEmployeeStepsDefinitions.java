package starter.stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import net.serenitybdd.annotations.Steps;
import starter.actions.ApproveAppointmentByEmployeeSteps;
import starter.utils.AlertUtils;
import starter.utils.MessageVerifier;

public class ApproveAppointmentByEmployeeStepsDefinitions {

    @Steps
    ApproveAppointmentByEmployeeSteps approveSteps;

    private AlertUtils alertUtils;

    @Given("I have successfully logged in like an employee")
    public void logged_in_like_an_employee(){
        approveSteps.performLogin();
    }

    @Then("I see the status of appointment as {string}")
    public void i_see_the_status_of_appointment_as(String expectedStatus) {
        String actualStatus = approveSteps.getAppointmentStatus();
        MessageVerifier.verifyMessage(actualStatus, expectedStatus);
    }

    @Then("I change the status of appointment as {string}")
    public void i_change_the_status_of_appointment_as(String newStatus) {
        approveSteps.changeAppointmentStatus(newStatus);
    }

    @Then("I click on Update button")
    public void i_click_on_update_button() {
        approveSteps.clickUpdateButton();
    }

}
