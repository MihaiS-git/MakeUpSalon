package starter.actions;

import net.serenitybdd.annotations.Step;
import net.serenitybdd.core.steps.UIInteractionSteps;
import starter.pageobjects.ChangePasswordPage;

public class ChangePasswordSteps extends UIInteractionSteps {
    @Step("I click on Account icon")
    public void iClickOnAccountIcon(){
        find(ChangePasswordPage.ACCOUNT_ICON).click();
    }

    @Step("I click on Change Password icon")
    public void iClickOnChangePasswordIcon(){
        find(ChangePasswordPage.CHANGE_PASSWORD_ICON).click();
    }

    @Step("I enter new password {string}")
    public void iEnterNewPassword(String string){
        find(ChangePasswordPage.NEW_PASSWORD_FIELD).sendKeys(string);
    }

    @Step("I enter confirm password {string}")
    public void iEnterConfirmPassword(String string){
        find(ChangePasswordPage.CONFIRM_PASSWORD_FIELD).sendKeys(string);
    }

    @Step("I click on Change Password button")
    public void iClickOnChangePasswordButton(){
        find(ChangePasswordPage.CHANGE_PASSWORD_BUTTON).click();
    }
}
