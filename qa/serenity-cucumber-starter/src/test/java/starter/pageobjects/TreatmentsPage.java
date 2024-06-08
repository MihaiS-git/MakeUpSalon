package starter.pageobjects;

import net.serenitybdd.core.pages.PageObject;
import org.openqa.selenium.By;

public class TreatmentsPage extends PageObject {

    public static final By TREATMENTS_ICON = By.xpath("//*[@id=\"navbarDropdown\"]/ul[1]/li[1]/a");
    public static final By TREATMENT_CARD = By.cssSelector(".card");
    public static final By TREATMENT_NAME = By.cssSelector(".card-title");
    public static final By TREATMENT_DESCRIPTION = By.xpath(".//p[contains(text(), 'Description:')]");
    public static final By TREATMENT_PRICE = By.cssSelector(".text-muted");

}
