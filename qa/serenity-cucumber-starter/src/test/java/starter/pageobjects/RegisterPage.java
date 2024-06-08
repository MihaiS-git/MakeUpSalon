package starter.pageobjects;

import net.serenitybdd.core.pages.PageObject;
import org.openqa.selenium.By;

public class RegisterPage extends PageObject {

    public static final By REGISTER_IN_ICON = By.xpath("//*[@id=\"navbarDropdown\"]/ul[2]/li[2]/a");
    public static final By FIRST_NAME = By.id("firstName");
    public static final By LAST_NAME = By.id("lastName");
    public static final By PHONE_NUMBER = By.id("phoneNumber");
    public static final By DATE_OF_BIRTH = By.id("dateOfBirth");
    public static final By ADDRESS = By.id("address");
    public static final By REGISTER_BUTTON = By.id("register");




}
