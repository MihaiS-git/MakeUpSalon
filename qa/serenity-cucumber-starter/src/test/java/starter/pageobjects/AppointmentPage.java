package starter.pageobjects;

import net.serenitybdd.core.pages.PageObject;
import org.openqa.selenium.By;

public class AppointmentPage extends PageObject {


    public static final By KARDIGAN_KIM_TREATMENTS = By.xpath("/html/body/app-root/main/div/div/div/div/app-professionals/div/div/app-professionals-list/div[2]/div/app-professionals-detail[3]/div/div/button");
    public static final By TREATMENT_OPTION = By.xpath("/html/body/app-root/main/div/div/div/div/app-professionals/div/div/app-employee-treatments/div[2]/div/app-treatment-detail[2]/div/div/button");
    public static final By DATE_TIME_PICKER = By.id("startDate");
    public static final By BOOK_BUTTON = By.xpath("/html/body/app-root/main/div/div/div/div/app-appointments/div/div/div/div/app-appointment-details/div/div/div/div[1]/table/tbody/tr[2]/td[4]");
    public static final By APPOINTMENTS_ICON = By.xpath("//*[@id=\"accordionAccount\"]/div[4]/h2/button/strong");
    public static final By APPOINTMENT_STATUS = By.xpath("//*[@id=\"collapseFour\"]/div/form/div/div[1]/div/fieldset/div[2]/div[1]/div/p");



}
