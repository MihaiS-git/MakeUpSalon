package starter.actions;

import net.serenitybdd.annotations.Step;
import net.serenitybdd.core.steps.UIInteractionSteps;
import starter.pageobjects.ApproveAppointmentByEmployeePage;
import starter.pageobjects.LoginPage;
import starter.utils.AlertUtils;


public class ApproveAppointmentByEmployeeSteps extends UIInteractionSteps {

    @Step("Perform login like an employee")
    public void performLogin() {
        $(LoginPage.LOGIN_IN_ICON).click();
        $(LoginPage.EMAIL_FIELD).sendKeys("kim@makeup.com");
        $(LoginPage.PASSWORD_FIELD).sendKeys("kim12345");
        $(LoginPage.LOGIN_BUTTON).click();

        AlertUtils alertUtils = new AlertUtils(getDriver());
        alertUtils.acceptAlert();
    }
    public void changeAppointmentStatus(String newStatus) {
        $(ApproveAppointmentByEmployeePage.APPOINTMENT_STATUS).selectByVisibleText(newStatus);
    }

    public void clickUpdateButton() {
        $(ApproveAppointmentByEmployeePage.UPDATE_BUTTON).click();
    }


    public String getAppointmentStatus() {
        return $(ApproveAppointmentByEmployeePage.APPOINTMENT_STATUS).getSelectedVisibleTextValue();
    }
}

