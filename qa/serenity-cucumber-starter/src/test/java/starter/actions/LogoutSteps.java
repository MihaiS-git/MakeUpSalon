package starter.actions;

import net.serenitybdd.annotations.Step;
import net.serenitybdd.core.steps.UIInteractionSteps;
import starter.pageobjects.LoginPage;
import starter.pageobjects.LogoutPage;
import starter.pageobjects.MakeUpSalonPage;
import starter.utils.AlertUtils;


public class LogoutSteps extends UIInteractionSteps {
    LogoutPage logout;
    MakeUpSalonPage makeUpSalonPage;


    @Step("Perform login")
    public void performLogin() {
        $(LoginPage.LOGIN_IN_ICON).click();
        $(LoginPage.EMAIL_FIELD).sendKeys("cristin@makeup.com");
        $(LoginPage.PASSWORD_FIELD).sendKeys("cristin1");
        $(LoginPage.LOGIN_BUTTON).click();

        AlertUtils alertUtils = new AlertUtils(getDriver());
        alertUtils.acceptAlert();
    }

    @Step("I click on logout button")
    public void iClickOnLogoutButton() {
        $(LogoutPage.LOGOUT_BUTTON).click();
    }

    @Step("Verify user is redirected to the home page")
    public void verifyUserIsRedirectedToHomePage() {
        String currentUrl = getDriver().getCurrentUrl();
        boolean isHomePage = currentUrl.equals(MakeUpSalonPage.MAKE_UP_SALON_PAGE_URL);
        assert isHomePage : "User is not redirected to the home page.";
    }

    @Step("Get logout success message")
    public String getLogoutSuccessMessage() {
        return $(LoginPage.LOGIN_IN_ICON).getText();
    }
}
