package starter.pageobjects;

import net.serenitybdd.core.pages.PageObject;
import org.openqa.selenium.By;

public class LogoutPage extends PageObject {

    public static final By LOGOUT_BUTTON = By.xpath("//*[@id=\"navbarDropdown\"]/ul[2]/li[2]/a");

}
