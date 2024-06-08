package starter.pageobjects;

import net.serenitybdd.core.pages.PageObject;
import org.openqa.selenium.By;

public class ProfessionalsPage extends PageObject {
    public static final By PROFESSIONALS_ICON = By.xpath("//*[@id=\"navbarDropdown\"]/ul[1]/li[2]/a");
    public static final By PROFESSIONAL_CARD = By.cssSelector(".card");
    public static final By PROFESSIONAL_NAME = By.cssSelector(".card-title");
    public static final By PROFESSIONAL_PHONE = By.cssSelector(".card-text");
    public static final By PROFESSIONAL_TREATMENTS = By.xpath("/html/body/app-root/main/div/div/div/div/app-professionals/div/div/app-professionals-list/div[2]/div/app-professionals-detail[1]/div/div/button");
}
