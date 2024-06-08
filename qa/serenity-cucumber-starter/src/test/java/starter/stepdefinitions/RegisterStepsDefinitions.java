package starter.stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import net.serenitybdd.annotations.Steps;
import starter.actions.RegisterSteps;

public class RegisterStepsDefinitions {

    @Steps
    RegisterSteps registerSteps;

    @Given("I click on Register Icon")
    public void i_click_on_register_icon() {
        registerSteps.clickOnRegisterIcon();
    }
    @When("I enter the First Name {string}")
    public void i_enter_the_first_name(String string) {
        registerSteps.iEnterTheFirstName(string);
    }
    @When("I enter the Last Name {string}")
    public void i_enter_the_last_name(String string) {
        registerSteps.iEnterTheLastName(string);
    }
    @When("I enter the Phone Number {string}")
    public void i_enter_the_phone_number(String string) {
        registerSteps.iEnterThePhoneNumber(string);
    }
    @When("I enter the Date Of Birth {string}")
    public void i_enter_the_date_of_birth(String string) {
        registerSteps.iEnterTheDateOfBirth(string);
    }
    @When("I enter the Address {string}")
    public void i_enter_the_address(String string) {
        registerSteps.iEnterTheAddress(string);
    }
    @When("I click on the Register button")
    public void i_click_on_the_register_button() {
        registerSteps.iClickOnTheRegisterButton();
    }

}
