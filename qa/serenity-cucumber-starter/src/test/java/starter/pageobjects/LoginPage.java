package starter.pageobjects;

import net.serenitybdd.core.pages.PageObject;
import org.openqa.selenium.By;

public class LoginPage extends PageObject {

    public static final By LOGIN_IN_ICON = By.xpath("//*[@id=\"navbarDropdown\"]/ul[2]/li[1]/a");
    public static final By EMAIL_FIELD = By.id("email");
    public static final By PASSWORD_FIELD = By.id("password");
    public static final By LOGIN_BUTTON = By.xpath("/html/body/app-root/main/div/div/div/div/app-auth/div/form/fieldset/div[3]/button");

}
