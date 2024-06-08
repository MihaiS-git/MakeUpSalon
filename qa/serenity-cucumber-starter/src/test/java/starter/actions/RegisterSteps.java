package starter.actions;

import net.serenitybdd.annotations.Step;
import net.serenitybdd.core.steps.UIInteractionSteps;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import starter.pageobjects.RegisterPage;

public class RegisterSteps extends UIInteractionSteps {

    @Step("I click on Register Icon")
    public void clickOnRegisterIcon(){
        find(RegisterPage.REGISTER_IN_ICON).click();
    }

    @Step("I enter the First Name {string}")
    public void iEnterTheFirstName(String string){
        find(RegisterPage.FIRST_NAME).sendKeys(string);
    }

    @Step("I enter the Last Name {string}")
    public void iEnterTheLastName(String string){
        find(RegisterPage.LAST_NAME).sendKeys(string);
    }

    @Step("I enter the Phone Number {string}")
    public void iEnterThePhoneNumber(String string){
        find(RegisterPage.PHONE_NUMBER).sendKeys(string);
    }

    @Step("I enter the Date Of Birth {string}")
    public void iEnterTheDateOfBirth(String string){
        find(RegisterPage.DATE_OF_BIRTH).sendKeys(string);
    }

    @Step("I enter the Address {string}")
    public void iEnterTheAddress(String string){
        find(RegisterPage.ADDRESS).sendKeys(string);
    }

    @Step("I click on the Register button")
    public void iClickOnTheRegisterButton(){
        WebElement registerButton = find(RegisterPage.REGISTER_BUTTON);
        JavascriptExecutor jsExecutor = (JavascriptExecutor) getDriver();
        jsExecutor.executeScript("arguments[0].scrollIntoView(true);", registerButton);
        registerButton.click();
    }


}
