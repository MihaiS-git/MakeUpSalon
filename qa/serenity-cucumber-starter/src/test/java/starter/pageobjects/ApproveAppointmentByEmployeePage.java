package starter.pageobjects;

import net.serenitybdd.core.pages.PageObject;
import org.openqa.selenium.By;

public class ApproveAppointmentByEmployeePage extends PageObject {

    public static final By APPOINTMENT_STATUS = By.xpath("//*[@id=\"collapseFour\"]/div/form/div/div[1]/div/fieldset/div[2]/div[1]/div/select");
    public static final By UPDATE_BUTTON = By.xpath("//*[@id=\"collapseFour\"]/div/form/div/div[1]/div/fieldset/div[3]/button[1]");
}
