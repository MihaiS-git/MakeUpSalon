package starter.actions;

import net.serenitybdd.core.steps.UIInteractionSteps;
import org.openqa.selenium.*;
import starter.pageobjects.AppointmentPage;
import starter.utils.AlertUtils;
import starter.utils.MessageVerifier;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class AppointmentSteps extends UIInteractionSteps {

    private AlertUtils alertUtils;

    public AppointmentSteps() {
        this.alertUtils = new AlertUtils(getDriver());
    }

    public void chooseProfessional() {
        find(AppointmentPage.KARDIGAN_KIM_TREATMENTS).click();
    }

    public void selectTreatment() {
        WebElement treatmentButton = find(AppointmentPage.TREATMENT_OPTION);
        JavascriptExecutor jsExecutor = (JavascriptExecutor) getDriver();
        jsExecutor.executeScript("arguments[0].scrollIntoView(true);", treatmentButton);
        treatmentButton.click();
    }
    public void selectDateTime(String dateTimeStr) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime dateTime = LocalDateTime.parse(dateTimeStr, formatter);
        String formattedDateTime = dateTime.format(formatter);
        find(AppointmentPage.DATE_TIME_PICKER).click();
        find(AppointmentPage.DATE_TIME_PICKER).clear();
        find(AppointmentPage.DATE_TIME_PICKER).sendKeys(formattedDateTime);
    }

    public void clickBookButton() {
        find(AppointmentPage.BOOK_BUTTON).click();
    }

    public boolean isAppointmentMessageDisplayed(String expectedMessage) {
        String alertMessage = alertUtils.getAlertMessage();
        return alertMessage.equals(expectedMessage);
    }

    public void clickAppointmentsIcon() {
        find(AppointmentPage.APPOINTMENTS_ICON).click();
    }

    public void verifyAppointmentStatus(String expectedStatus) {
        String actualStatusWithPrefix = find(AppointmentPage.APPOINTMENT_STATUS).getText();

        String actualStatus = actualStatusWithPrefix.replace("Status:", "").trim();

        MessageVerifier.verifyMessage(actualStatus, expectedStatus);
    }
}
