package starter.stepdefinitions;

import io.cucumber.java.en.When;
import net.serenitybdd.annotations.Steps;
import starter.actions.ChangePasswordSteps;

public class ChangePasswordStepsDefinitions {

    @Steps
    ChangePasswordSteps changePasswordSteps;

    @When("I click on Account icon")
    public void i_click_on_account_icon() {
        changePasswordSteps.iClickOnAccountIcon();
    }
    @When("I click on Change Password icon")
    public void i_click_on_change_password_icon() {
        changePasswordSteps.iClickOnChangePasswordIcon();
    }
    @When("I enter new password {string}")
    public void i_enter_new_password(String string) {
        changePasswordSteps.iEnterNewPassword(string);
    }
    @When("I enter confirm password {string}")
    public void i_enter_confirm_password(String string) {
        changePasswordSteps.iEnterConfirmPassword(string);
    }

    @When("I click on Change Password button")
    public void i_click_on_Change_Password_button(){
        changePasswordSteps.iClickOnChangePasswordButton();
    }

}
